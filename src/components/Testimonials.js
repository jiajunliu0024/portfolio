import { testimonials } from "../data";

const Marquee = (testimonials) =>{
    testimonials.map(testimonial=>{
        <Card></Card>
    })
}


const Testimonials = () => {




  return (
    <div>
      <Marquee>
        <MyComponent />
        <MyComponent />
        <MyComponent />
      </Marquee>
    </div>
  );
};
