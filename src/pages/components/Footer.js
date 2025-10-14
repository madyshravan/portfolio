

export default function Footer() {
  return (
        <footer className="bg-indigo-600 text-white text-center py-4 mt-auto">

      <div className="flex justify-center space-x-6 mb-4">
        {/* GitHub */}
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-indigo-400"
        >
          GitHub
        </a>

        {/* LinkedIn */}
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-indigo-400"
        >
          LinkedIn
        </a>

        {/* Twitter (optional) */}
        <a 
          href="https://twitter.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-indigo-400"
        >
          Twitter
        </a>

        {/* Resume (internal Next.js link) */}
        <a 
          href="/resume.pdf" 
          className="hover:text-indigo-400"
        >
          Resume
        </a>
      </div>
      
      <p className="text-sm text-gray-400">
        © 2025 MyPortfolio. All rights reserved.
      </p>
    </footer>
  );
}