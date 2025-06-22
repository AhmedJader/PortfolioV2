'use server';

import { db } from "../db";
import { resources } from "../db/schema/resources";
import { generateEmbeddings } from "../ai/embedding";
import { embeddings as embeddingsTable } from "../db/schema/embeddings";
import { z } from "zod";

const contentSchema = z.object({
  filename: z.string(),
  content: z.string().min(1).max(1000000),
});

export const createResource = async (input: { filename: string; content: string }) => {
  try {
    const { content, filename } = contentSchema.parse(input);

    // ✅ Only insert filename into resources
    const [resource] = await db
      .insert(resources)
      .values({ filename })
      .returning();

    const e = await generateEmbeddings(content);

    // ✅ Embed and store chunks
    await db.insert(embeddingsTable).values(
      e.map((embedding) => ({
        content: embedding.content,
        embedding: embedding.embedding,
        resourceId: resource.id,
      }))
    );

    return "Resource created and embedded.";
  } catch (e) {
    console.error("❌ ERROR during createResource");
    if (e instanceof Error) {
      console.error("→ MESSAGE:", e.message);
      console.error("→ STACK:\n", e.stack);
    } else {
      console.error("→ RAW:", e);
    }

    return e instanceof Error ? e.message : "Unknown error";
  }
};
