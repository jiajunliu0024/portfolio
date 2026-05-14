import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBasketball } from "react-icons/fa6";
import { personInfo } from "../../data";
import { MdEmail } from "react-icons/md";
import SendEmailLink from "./SendEmailLink";

export default function ContactBar() {
  return (
    <div className="social-bar">
      <a href={personInfo.linkedin} aria-label="LinkedIn">
        <FaLinkedin size={22} />
      </a>
      <a href={personInfo.github} aria-label="GitHub">
        <FaGithub size={22} />
      </a>
      <a href={personInfo.hobby} aria-label="Hobby">
        <FaBasketball size={22} />
      </a>
      <SendEmailLink mailElements={<MdEmail size={23} />} />
      <a href={personInfo.whatsApp} aria-label="WhatsApp">
        <IoLogoWhatsapp size={24} />
      </a>
    </div>
  );
}
