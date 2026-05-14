import * as React from "react";
import { experience } from "../../data";

export default function Experience() {
  const timeline = React.useMemo(() => [...experience].reverse(), []);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeExperience = timeline[activeIndex];
  const subjects = activeExperience.detail?.subjects || [];

  return (
    <section id="experience" className="section-block">
      <div className="site-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">A practical path through code and AI.</h2>
          </div>
          <p className="section-note">
            Switch through the timeline to see the work, systems, and tools that
            shaped each stage.
          </p>
        </div>

        <div className="experience-switcher">
          <div className="experience-tabs" aria-label="Experience timeline">
            {timeline.map((exp, index) => (
              <button
                key={`${exp.name}-${exp.period}`}
                type="button"
                className={`experience-tab ${index === activeIndex ? "is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span>{exp.period}</span>
                <strong>{exp.name}</strong>
                <small>{exp.major}</small>
              </button>
            ))}
          </div>

          <article className="experience-feature">
            <div className="experience-feature-top">
              <div>
                <p className="eyebrow">Selected chapter</p>
                <h3>{activeExperience.name}</h3>
                <h4>{activeExperience.major}</h4>
              </div>
              <span>{activeExperience.period}</span>
            </div>

            <ul className="experience-points">
              {activeExperience.description.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {subjects.length > 0 && (
              <div className="experience-tags">
                {subjects.slice(0, 6).map((subject) => (
                  <span key={subject}>{subject}</span>
                ))}
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
