import React from "react";

export default function BlogHeader() {
  const links = [
    ["Work", "#projects"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Contact", "#schedule"],
  ];

  return (
    <header className="site-shell glass-nav">
      <nav className="flex items-center justify-between gap-4 px-5 py-3">
        <a href="/#about" className="text-sm font-extrabold text-neutral-950">
          Jiajun Liu
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        <a href="#schedule" className="availability-pill">
          <span className="pulse-dot" />
          Available
        </a>
      </nav>
    </header>
  );
}
