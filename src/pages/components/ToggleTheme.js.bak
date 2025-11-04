export default function ThemeToggle({ theme, toggleTheme }) {
  // theme is 'light' or 'dark'
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="p-2 rounded-md bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 transition"
    >
    <p>
        Theme
    </p>
      {theme === "dark" ? (
        // Sun icon (light mode)
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a1 1 0 00-1 1v1a1 1 0 102 0V3a1 1 0 00-1-1zM4.22 4.22a1 1 0 00-1.415 1.415L3.99 6.8a1 1 0 101.414-1.414L4.22 4.22zM2 10a1 1 0 001-1h1a1 1 0 100 2H3a1 1 0 00-1-1zm8 6a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM15.78 15.78a1 1 0 001.415-1.415l-.184-.184a1 1 0 10-1.414 1.414l.183.185zM18 9a1 1 0 00-1-1h-1a1 1 0 100 2h1a1 1 0 001-1zM4.22 15.78l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 10-1.414-1.414zM14 3a1 1 0 00-1.707-.707l-.586.586a1 1 0 101.414 1.414l.586-.586A1 1 0 0014 3z" />
          <path d="M10 6.5A3.5 3.5 0 1010 13.5 3.5 3.5 0 0010 6.5z" />
        </svg>
      ) : (
        // Moon icon (dark mode)
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      )}
    </button>
  );
}
