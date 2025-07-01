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
    name: 'Aether Club Site',
    shortDescription: 'Uottawa Aether Club site',
    longDescription:
      'Aether is a student-run club at the University of Ottawa focused on AI and machine learning. This site showcases our projects, events, and resources for students interested in AI.',
    url: 'https://stemaihub.com', // Update with real link if needed
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
    description: 'Building a resume agent that curates new resumes based on embeddings from linkedin job descriptions to tailor feedback and generate improved résumés.',
  },
  {
    id: 'rag-playground',
    title: '🧪 "Ask the Recruiter" Simulator',
    description: 'Experimenting with multi-source RAG using PDFs + scraped data for personalized answers.',
  },
  {
    id: 'rag-prototype-2',
    title: '🚀 Study Buddy',
    description: 'Next-gen agent with memory, Trained on your hackathon submissions and workflows.',
  },
];
