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
    name: 'Resume Agent Tool',
    shortDescription: 'RAG Agent to curate and generate improved resumes for users.',
    longDescription:
      'This project is a Resume Agent that uses RAG (Retrieval-Augmented Generation) to curate new resumes based on embeddings from LinkedIn job descriptions. It tailors feedback and generates improved résumés for users, helping them stand out in the job market.',
    url: 'https://github.com/AhmedJader/ResumAgent',
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
    name: 'FootPrint Scraper',
    shortDescription: 'Social Media Footprint tracking tool built with Express.js and next.js react.',
    longDescription:
      'This app lets users view security vulnerabilites via OSINT and informs them with alerts, REST APIs, and visualization dashboards. It uses express.js for the backend, React for the frontend.',
    url: 'https://github.com/AhmedJader/AnonAlyze',
  },
  {
    id: 'agentic-tutor',
    name: 'Langchain Agentic Tutor',
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
