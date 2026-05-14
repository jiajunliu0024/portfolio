import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const BlogEventSchedule = () => {
  const email = "jiajunliu0024@gmail.com";
  const subject = "Project chat";
  const body = "Hello,\n\nLet's have a talk.\n\nBest regards!";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        styles: { branding: { brandColor: "#171717" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="schedule" className="section-block">
      <div className="site-shell">
        <div className="cta-panel">
          <div>
            <p className="eyebrow text-white/50">Start a project</p>
            <h2>Have an idea worth making real?</h2>
            <p>
              I am open to product builds, AI features, automation work, and
              software roles where clean execution matters.
            </p>
          </div>

          <div className="cta-actions">
            <button
              data-cal-namespace="15min"
              data-cal-link="jiajun-liu/15min"
              data-cal-config='{"layout":"month_view"}'
              className="button-primary bg-white text-neutral-950"
            >
              Schedule a Meeting
            </button>
            <a href={mailtoLink} className="button-secondary">
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogEventSchedule;
