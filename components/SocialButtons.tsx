// components/SocialButtons.tsx

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialButtons() {
  return (
    <div className="flex justify-center gap-6 mt-4 text-white">
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}
