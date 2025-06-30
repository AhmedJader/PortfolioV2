export interface Project {
  id: string;
  name: string;
  shortDescription: string;  // For compact card view
  longDescription: string;   // For hover/expanded popout
  url: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    name: 'AI Portfolio Website',
    shortDescription: 'Serverless portfolio with AI chatbot, Vercel SDK, and pgvector.',
    longDescription:
      'This portfolio features an AI chatbot that responds based on facts embedded from my résumé and personal documents. Built with Next.js 14 App Router, TailwindCSS v4, Vercel AI SDK, Drizzle ORM, and NeonDB (pgvector).',
    url: 'https://github.com/your-username/portfolio',
  },
  {
    id: 'rag-chatbot',
    name: 'RAG Chatbot',
    shortDescription: 'Contextual chatbot with RAG using OpenAI + vector DB.',
    longDescription:
      'A fullstack chatbot built with OpenAI GPT-4o and pgvector. Uses embedding-based retrieval to reduce hallucination and respond only using the provided context. Includes support for PDF ingestion, chat memory, and streaming.',
    url: 'https://github.com/your-username/rag-chatbot',
  },
  {
    id: 'finance-tracker',
    name: 'Finance Tracker',
    shortDescription: 'Expense tracking tool built with Flask and React.',
    longDescription:
      'This app lets users track expenses and budgets with user auth, REST APIs, and visualization dashboards. It uses Flask for the backend, React for the frontend, and SQLite/PostgreSQL for persistence.',
    url: 'https://github.com/your-username/finance-tracker',
  },
  {
    id: 'agentic-tutor',
    name: 'Sustainable Agentic Tutor',
    shortDescription: 'Self-hosted LLM tutor with sustainability and DEI focus.',
    longDescription:
      'A next-generation educational platform that creates personalized learning paths using quiz data and curriculum PDFs. Built with Next.js, FastAPI, Ollama, LangChain, and Chroma. Features include RAG-based retrieval, SerpAPI resource fetching, multi-language support, and a live sustainability dashboard. Designed to reduce carbon and cost by shifting computation to client devices.',
    url: 'https://github.com/AhmedJader/GenAiHackathon',
  },
  {
    id: 'cloudless-agent',
    name: 'Cloudless RAG Agent',
    shortDescription: 'RAG-based chatbot with fully local operation and memory.',
    longDescription:
      'A cloud-independent agentic chatbot that only responds using local knowledge base data. Built with Next.js 14, Drizzle ORM, pgvector (NeonDB), and Vercel AI SDK. Supports OpenAI and local embedding fallback, with fact recall and streaming support.',
    url: 'https://github.com/your-username/cloudless-agent', // Update with real link if needed
  }
];


// lib/constants.ts
export interface InfoCard {
  id: string;
  title: string;
  description: string;
}

export const INFOCARDS: InfoCard[] = [
  {
    id: 'resume-agent',
    title: '🧠 Resume RAG Agent',
    description: 'Building a resume agent that uses embeddings to tailor feedback and generate improved résumés.',
  },
  {
    id: 'rag-playground',
    title: '🧪 RAG Playground',
    description: 'Experimenting with multi-source RAG using PDFs + scraped data for personalized answers.',
  },
  {
    id: 'rag-prototype-2',
    title: '🚀 Agentic RAG v2',
    description: 'Next-gen agent with memory, chaining, and fallback to local models (Ollama) when offline.',
  },
];
