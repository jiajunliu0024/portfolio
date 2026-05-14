import React from "react";

export default function About() {
  const profileImg = `${process.env.PUBLIC_URL}/images/profile-upperbody-card.jpg`;

  return (
    <section id="about" className="hero-section">
      <div className="site-shell hero-grid">
        <div className="hero-copy">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="tag-pill">Melbourne based</span>
              <span className="tag-pill">Full-stack developer</span>
            </div>

            <h1 className="hero-title">
              Building clean digital products <span>with AI fluency.</span>
            </h1>

            <p className="hero-subtitle">
              Hi, I am Jiajun Liu. I design and ship web applications, AI tools,
              and automation systems with a calm product mindset and practical
              engineering depth.
            </p>

            <div className="hero-actions">
              <a href="#schedule" className="button-primary">
                Work With Me
              </a>
              <a href="#projects" className="button-secondary">
                View Selected Work
              </a>
            </div>
          </div>

          <div className="metric-row">
            <div className="metric-card">
              <strong>4+</strong>
              <span>Years building software</span>
            </div>
            <div className="metric-card">
              <strong>AI</strong>
              <span>Masters focus</span>
            </div>
            <div className="metric-card">
              <strong>AU</strong>
              <span>Melbourne, Australia</span>
            </div>
          </div>
        </div>

        <div className="portrait-panel">
          <div className="portrait-card">
            <img alt="Jiajun Liu portrait" src={profileImg} />
            <div className="portrait-nameplate">
              <h2>Jiajun Liu</h2>
              <p>Melbourne based developer</p>
              <span>Full-stack / AI systems</span>
            </div>
          </div>

          <div className="mini-stack">
            <div className="mini-card">
              <span>Current focus</span>
              <strong>AI products and clean web systems</strong>
            </div>
            <div className="mini-card">
              <span>Core stack</span>
              <strong>React / Java / Python / AWS</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
