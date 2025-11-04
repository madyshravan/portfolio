import { useEffect, useState } from "react";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

export default function Project({ theme, toggleTheme }) {
  const [projects, setProjects] = React.useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search term:", e.target.value);
  }

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    fetch("https://api.github.com/users/madyshravan/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the structure of the fetched data
        setProjects(data); // ✅ no .projects here
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
  <NavBar theme={theme} toggleTheme={toggleTheme} />
      
      <section className="w-full py-16 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 text-white text-center shadow-lg mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 My Recent Work
          </h2>
          <p className="text-lg md:text-xl mb-6">
            A collection of projects I’ve built using React, Next.js, and
            Tailwind CSS. Each project reflects my journey in frontend
            development.
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 hover:shadow-xl transition-all"
          >
            🌟 View More on GitHub
          </a>
        </div>
      </section>
      <input onChange={handleChange} type="search" placeholder="Search projects..." className="border p-2 m-4 w-1/2 mx-auto block rounded" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProjects?.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
