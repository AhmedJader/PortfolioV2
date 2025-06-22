import { embed, embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import { db } from "../db";
import { embeddings } from "../db/schema/embeddings";
import { sql, cosineDistance, desc, gt } from "drizzle-orm";

const embeddingModel = openai.embedding("text-embedding-ada-002");

export const generateChunks = (input: string): string[] =>
  input.trim().split(".").filter((chunk) => chunk.length > 0);

export const generateEmbeddings = async (value: string) => {
  const chunks = generateChunks(value);
  const { embeddings: e } = await embedMany({
    model: embeddingModel,
    values: chunks,
  });
  return e.map((embedding, i) => ({
    content: chunks[i],
    embedding,
  }));
};

export const generateEmbedding = async (value: string): Promise<number[]> => {
  const { embedding } = await embed({
    model: embeddingModel,
    value,
  });
  return embedding;
};

export const findRelevantContent = async (query: string) => {
  const queryEmbedding = await generateEmbedding(query);
  const similarity = sql<number>`1 - (${cosineDistance(
    embeddings.embedding,
    queryEmbedding
  )})`;

  return await db
    .select({
      content: embeddings.content,
      similarity,
    })
    .from(embeddings)
    .where(gt(similarity, 0.5))
    .orderBy(desc(similarity))
    .limit(4);
};
