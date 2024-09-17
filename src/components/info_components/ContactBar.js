import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBasketball } from "react-icons/fa6";
import { personInfo } from "../../data";

export default function ContactBar() {
  return (
    <div className="flex flex-row h-auto w-full justify-center">
      <div className="h-[50px] px-5 lg:w-1/4 md:w-4/5 sm:w-4/5 mx-5 bg-gray-100 rounded-full flex flex-row justify-between items-center">
        <a href={personInfo.linkedin}>
          <FaLinkedin className="size-8 md:size-6 text-neutral-500 hover:text-black" />
        </a>
        <a href={personInfo.github}>
          <FaGithub className="size-8 md:size-6 text-neutral-500 hover:text-black" />
        </a>
        <a href={personInfo.hobby}>
          <FaBasketball className="size-8 md:size-6 text-neutral-500 hover:text-black" />
        </a>
        <a href={personInfo.hobby}>
          <MdEmail className="size-8 md:size-6 text-neutral-500 hover:text-black" />
        </a>
        <a href={personInfo.whatsApp}>
          <IoLogoWhatsapp className="size-8 md:size-6 text-neutral-500 hover:text-black" />
        </a>
      </div>
    </div>
  );
}
