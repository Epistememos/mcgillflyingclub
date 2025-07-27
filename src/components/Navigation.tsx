import { useState } from "react";

export default function Navigation() {
  const pages = ['home', 'about', 'training', 'partners', 'connect'];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="font-sans bg-zinc-950/30 py-3 lg:py-5 pl-2 lg:pl-8 fixed top-0 left-0 w-full z-50">
      <div className="mx-auto px-2 lg:px-4 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="w-full flex flex-row justify-between">
          <div className="flex items-center gap-1 lg:gap-3 flex-1 mb-2 lg:mb-0 justify-between">
            <div className="flex items-center gap-1 lg:gap-3">
              <img src="/logo.png" alt="McGill Flying Club Logo" className="w-1/4" />
            <h1 className="text-white text-2xl lg:text-5xl font-garamond">McGill</h1>
            <h1 className="text-white text-2xl lg:text-4xl font-bold font-roboto pr-4 lg:pr-12">FLYING CLUB</h1>
            </div>
          </div>
          <button
            className="lg:hidden px-4 py-3 focus:outline-none"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className={`w-6 h-6 text-white transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-4 lg:space-x-8 pr-2 lg:pr-4">
          {pages.map((page) => (
            <a
              key={page}
              href={page === "home" ? "/" : `/${page}`}
              className="text-white font-medium hover:text-red-400 transition-colors duration-200"
            >
              {page}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:hidden bg-zinc-950/60 rounded-l-lg">
        {menuOpen && (
          <div className="px-4 py-2 space-y-2">
            {pages.map((page) => (
              <a
                key={page}
                href={page === "home" ? "/" : `/${page}`}
                className="block text-white font-medium hover:text-red-400 transition-colors duration-200 "
              >
                {page}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}