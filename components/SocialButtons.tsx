// components/SocialButtons.tsx

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialButtons() {
  return (
    <>
      <a
        href="https://github.com/AhmedJader"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
        title="GitHub Profile"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/ahmed-abduljader-4464b325a/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
        title="LinkedIn Profile"
      >
        <FaLinkedin size={24} />
      </a>
    </>
  );
}
