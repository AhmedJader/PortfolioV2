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
];
