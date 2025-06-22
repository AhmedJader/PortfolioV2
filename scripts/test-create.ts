// scripts/test-create.ts
import 'dotenv/config';

import { db } from "@/lib/db";
import { resources } from "@/lib/db/schema/resources";

async function main() {
  await db.insert(resources).values({
    filename: "test.pdf",
  });

  console.log("✅ resources table created");
}

main().catch(console.error);
