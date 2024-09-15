import { comments } from "../data";
import Avatar from "@mui/material/Avatar";
import Marquee from "react-fast-marquee";
import { ChatAlt2Icon } from "@heroicons/react/solid";

export const CommentCard = ({ comments }) => {
  return (
    <Marquee
      speed={200}
      gradientWidth={100}
      className="py-10 h-50 w-full ease-in-out"
      pauseOnHover={true}
    >
      {comments.map((comment) => (
        <a href={comment.link} className="block">
          <div className="shadow-lg flex h-[200px] w-[600px] mx-40 flex-col border rounded-lg p-4">
            <div>
              <article className="text-wrap w-full h-full">
                <p className="text-slate-500">{comment.text}</p>
              </article>
            </div>
            <div className="mt-auto bottom-* flex flex-row">
              <Avatar src={comment.image} />
              <div className="ml-3 flex flex-col">
                <h2 className="text-slate-600 text-sm">{comment.name}</h2>
                <h4 className="text-slate-400 text-xs">{comment.company}</h4>
              </div>
            </div>
          </div>
        </a>
      ))}
    </Marquee>
  );
};

export default function Testimonials() {
  return (
    <div className="h-auto">
      <div className="flex flex-col w-full items-center mt-10">
        <ChatAlt2Icon className="mx-auto text-black inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium body-font mb-4 text-black">
          Testimonials
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
      </div>
      <CommentCard comments={comments} />
    </div>
  );
}
