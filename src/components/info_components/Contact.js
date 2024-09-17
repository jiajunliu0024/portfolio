// src/components/Contact.js
import React, { useEffect } from "react";
import BlogHeader from "../menu_components/BlogHeader";
import "../../App.css";

function DisplayValidationError({ hiddenStatus, message }) {
  return (
    hiddenStatus && (
      <span
        key={message}
        hidden={hiddenStatus}
        className="text-left w-full ml-2 text-xs my-2 text-red-500"
      >
        {message}
      </span>
    )
  );
}

export default function Contact() {
  const [hasEmail, setHasEmail] = React.useState(true);
  const [hasMessage, setHasMessage] = React.useState(true);
  const [hasName, setHasName] = React.useState(true);
  const [validEmail, setValidEmail] = React.useState(true);
  const [sendMsgClick, secSendMsgClick] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const errorMessage = {
    name: "name is required",
    email: "email is required",
    message: "message is required",
    validEmail: "email is invalid",
  };

  useEffect(() => {
    console.log("hasName", hasName);
    name.length > 0 ? setHasName(true) : setHasName(false);
  }, [name]);

  useEffect(() => {
    console.log("hasEmail", hasEmail);
    email.length > 0 ? setHasEmail(true) : setHasEmail(false);
  }, [email]);

  useEffect(() => {
    message.length > 0 ? setHasMessage(true) : setHasMessage(false);
    console.log("hasMessage", hasMessage);
  }, [message]);

  const sendMsg = () => {
    if (hasEmail && hasMessage && hasName) {
      alert("Message sent successfully");
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <section id="contact" className="">
      <BlogHeader />
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">Contact</span>
        <form className="flex flex-col items-center mt-10 w-96 p-5 md:p-0">
          <input
            onInput={(e) => setName(e.target.value)}
            className="p-4 w-full m-2 bg-gray-100 rounded-md border-0 outline-none"
            placeholder="Name"
            name="name"
          ></input>
          <DisplayValidationError
            hidden={hasName}
            message={errorMessage.name}
          />
          <input
            onInput={(e) => setEmail(e.target.value)}
            className="p-4 w-full m-2 bg-gray-100 rounded-md border-0 outline-none"
            placeholder="Email"
            name="email"
          ></input>
          <DisplayValidationError
            hidden={hasEmail}
            message={errorMessage.email}
          />
          <textarea
            onInput={(e) => setMessage(e.target.value)}
            className="p-4 m-2 w-full max-h-full border-0 bg-gray-100 rounded-md outline-none"
            rows="4"
            placeholder="Let's have a chat"
            name="message"
          ></textarea>
          <DisplayValidationError
            hidden={hasMessage}
            message={errorMessage.message}
          />
        </form>
        <button onClick={sendMsg} className="button-submit">
          Submit
        </button>
      </div>
    </section>
  );
}
