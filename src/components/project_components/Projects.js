import React from "react";
import { projects } from "../../data";

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="site-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">Product-minded builds with real use.</h2>
          </div>
          <p className="section-note">
            A compact set of applications across AI, mapping, automation, and
            mobile utility.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <a key={project.title} className="project-card" href={project.link}>
              <div className="project-media">
                {project.video ? (
                  <video
                    aria-label={`${project.title} preview`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={project.poster}
                    src={project.video}
                  />
                ) : (
                  <img alt={`${project.title} preview`} src={project.image} />
                )}
              </div>
              <div className="project-body">
                <div className="project-topline">
                  <span>{project.subtitle}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
