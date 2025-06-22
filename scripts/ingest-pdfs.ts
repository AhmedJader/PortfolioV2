// scripts/ingest-pdfs.ts
import 'dotenv/config';

import fs from "fs/promises";
import path from "path";
import pdf from "pdf-parse";
import { createResource } from "@/lib/actions/resources";
import { db } from "@/lib/db"; // <-- make sure this path is correct
import { resources } from "@/lib/db/schema/resources"; // <-- and this too
import { eq } from "drizzle-orm";

const PDF_DIR = path.join(process.cwd(), "pdfs");

async function main() {
  const files = await fs.readdir(PDF_DIR);
  const pdfFiles = files.filter((file) => file.endsWith(".pdf"));

  for (const file of pdfFiles) {
    const safeFilename = file.replace(/[^\w\d\-_.]/g, "_");

    // ✅ Skip if already in DB
    const [existing] = await db.select().from(resources).where(eq(resources.filename, safeFilename));
    if (existing) {
      console.log(`⏭ Skipping ${safeFilename} (already processed)`);
      continue;
    }

    const filePath = path.join(PDF_DIR, file);
    const buffer = await fs.readFile(filePath);

    try {
      const { text } = await pdf(buffer);

      const cleanedText = text
        .replace(/[^\x00-\x7F]/g, "") // Remove non-ASCII characters
        .replace(/\s+/g, " ")        // Normalize whitespace
        .trim();

      const result = await createResource({
        filename: safeFilename,
        content: cleanedText,
      });

      console.log(`✅ Processed: ${file} | Result: ${result}`);
    } catch (e) {
      console.error("❌ ERROR during createResource:");
      if (e instanceof Error) {
        console.error(e.stack);
        return e.message;
      }
      console.error(e);
      return "Unknown error";
    }
  }
}

main().catch(console.error);
