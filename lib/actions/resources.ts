'use server';

import { db } from "../db";
import { insertResourceSchema, resources } from "../db/schema/resources";
import { generateEmbeddings } from "../ai/embedding";
import { embeddings as embeddingsTable } from "../db/schema/embeddings";

export const createResource = async (input: { content: string }) => {
  try {
    const { content } = insertResourceSchema.parse(input);

    const [resource] = await db
      .insert(resources)
      .values({ content })
      .returning();

    const e = await generateEmbeddings(content);

    await db.insert(embeddingsTable).values(
      e.map((embedding) => ({
        content: embedding.content,
        embedding: embedding.embedding,
        resourceId: resource.id,
      }))
    );

    return "Resource created and embedded.";
  } catch (e) {
    return e instanceof Error ? e.message : "Failed to create resource.";
  }
};
