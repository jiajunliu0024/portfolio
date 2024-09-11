import { testimonials } from "../data";
import { Avatar, Card } from "antd";

const TestimonialsContent = (testimonials) => {
  testimonials.map((testimonial) => {
    <Card>
      <Avatar src={testimonial.avatar} />
      <div>
        <h1>{testimonial.name}</h1>
        <p>{testimonial.quote}</p>
      </div>
    </Card>;
  });
};

const Testimonials = () => {
  return (
    <div>
      <Marquee>
        <TestimonialsContent testimonials={testimonials} />
      </Marquee>
    </div>
  );
};
