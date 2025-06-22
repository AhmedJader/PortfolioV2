import { createResource } from "@/lib/actions/resources";
import { openai } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { z } from "zod";
import { findRelevantContent } from "@/lib/ai/embedding";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Get latest user message (assumes last message is from user)
  const userMessage = messages[messages.length - 1];
  const userQuestion = userMessage?.content ?? "";

  const contextChunks = await findRelevantContent(userQuestion);

  // ✂️ Trim the chunks to avoid exceeding token budget
  const MAX_CHARS = 1500;
  let totalLength = 0;
  const trimmedChunks = contextChunks.filter((c) => {
    totalLength += c.name.length;
    return totalLength <= MAX_CHARS;
  });

  // 🧱 Build a context string from trimmed chunks
  const contextString =
    trimmedChunks.length > 0
      ? `You are speaking on behalf of Ahmed Abduljader, a computer science student at York University. Answer as if you are Ahmed. Base your responses on the following resume content:\n\n${trimmedChunks
          .map((c) => `- ${c.name}`)
          .join("\n")}`
      : "No context found in the knowledge base.";
  console.log("Injected RAG characters:", totalLength);
  console.log("Chunks injected:", trimmedChunks.length);

  // 👷 Create an injected context message
  const contextMessage = {
    role: "system" as const,
    content: contextString,
  };

  const result = await streamText({
    model: openai("gpt-4o"),
    messages: [contextMessage, ...messages],
    tools: {},
  });

  return result.toDataStreamResponse();
}
