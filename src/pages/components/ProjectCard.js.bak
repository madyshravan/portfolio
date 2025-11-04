export default function ProjectCard({ name, description, html_url, image }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Project Image */}
      {image && (
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <img
            className="w-full h-48 object-cover"
            src={image}
            alt={name}
          />
        </a>
      )}

      {/* Project Info */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition">
          {name}
        </h2>
        <p className="text-gray-600 mt-3 mb-5 line-clamp-3">
          {description ? description : "No description available."}
        </p>

        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 hover:shadow-md transition-all"
        >
          <span>View on GitHub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
