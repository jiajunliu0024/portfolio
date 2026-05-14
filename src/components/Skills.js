import React from "react";
import { skills } from "../data";

export default function Skills() {
  const extendedSkills = [...new Set([...skills, "Python", "AWS", "Kubernetes", "PostgreSQL"])];

  return (
    <section id="skills" className="section-block">
      <div className="site-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Stack</p>
            <h2 className="section-title">Tools I use to turn ideas into shipped products.</h2>
          </div>
          <p className="section-note">
            Frontend polish, backend reliability, and AI implementation in one
            working loop.
          </p>
        </div>

        <div className="clean-card p-5 md:p-7">
          <div className="skill-wrap">
            {extendedSkills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
