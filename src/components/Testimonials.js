import { comments } from "../data";
import Marquee from "react-fast-marquee";

export default function Testimonials() {
  return (
    <section className="section-block">
      <div className="site-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Testimonials</p>
            <h2 className="section-title">Trusted by collaborators and teams.</h2>
          </div>
        </div>

        <Marquee
          speed={46}
          gradient={false}
          pauseOnHover
          className="testimonial-marquee"
        >
          {comments.map((comment) => (
            <a
              key={`${comment.name}-${comment.company}`}
              href={comment.link}
              className="clean-card testimonial-card"
            >
              <p>{comment.text}</p>
              <div className="testimonial-person">
                <img alt={comment.name} src={comment.image} />
                <div>
                  <h3 className="m-0 text-sm font-bold text-neutral-950">
                    {comment.name}
                  </h3>
                  <span className="text-xs font-semibold text-neutral-500">
                    {comment.company}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
