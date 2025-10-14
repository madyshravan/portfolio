import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function About({ theme, toggleTheme }) {
  return (
    <div className="flex flex-col min-h-screen">
  <NavBar theme={theme} toggleTheme={toggleTheme} />
      <main className="p-10 max-w-4xl mx-auto flex-grow text-gray-900">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          Hi, I'm <span className="font-semibold">Shravan</span>, Currently learning full-stack, strong in frontend with React/Next.js, experience with Svelte, good HTML/CSS foundation.
          I enjoy working with React, Next.js, and TailwindCSS to create 
          fast and user-friendly interfaces.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow bg-white">React</div>
          <div className="p-4 border rounded-lg shadow bg-white">Next.js</div>
          <div className="p-4 border rounded-lg shadow bg-white">Tailwind CSS</div>
          <div className="p-4 border rounded-lg shadow bg-white">JavaScript (ES6+)</div>
          <div className="p-4 border rounded-lg shadow bg-white">HTML & CSS</div>
          <div className="p-4 border rounded-lg shadow bg-white">Git & GitHub</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
