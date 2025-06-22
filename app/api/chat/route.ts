import { createResource } from "@/lib/actions/resources";
import { findRelevantContent } from "@/lib/ai/embedding";
import { openai } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { z } from "zod";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o"),
    system: `Only respond to questions using information retrieved from tools.
If you have no relevant information, reply "Sorry, I don’t know."`,
    messages,
    tools: {
      addResource: tool({
        description: "Add a resource to the knowledge base.",
        parameters: z.object({
          content: z.string(),
        }),
        execute: async ({ content }) => createResource({ content }),
      }),
      getInformation: tool({
        description: "Query knowledge base to answer user question.",
        parameters: z.object({
          question: z.string(),
        }),
        execute: async ({ question }) => findRelevantContent(question),
      }),
    },
  });

  return result.toDataStreamResponse();
}
