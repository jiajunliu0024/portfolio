// src/components/Contact.js
import { Button } from "antd";
import React, { useEffect } from "react";
import BlogHeader from "../menu_components/BlogHeader";

export default function Contact() {
  const [hasEmail, setHasEmail] = React.useState(false);
  const [hasMessage, setHasMessage] = React.useState(false);
  const [hasName, setHasName] = React.useState(false);
  const [validEmail, setValidEmail] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    if (name.length > 0) {
      setHasName(true);
    } else {
      setHasName(false);
    }
  }, [name]);
  useEffect(() => {
    if (email.length > 0) {
      setHasEmail(true);
    } else {
      setHasEmail(false);
    }
  }, [email]);

  useEffect(() => {
    if (email.length > 0) {
      const re = /\S+@\S+\.\S+/;
      setValidEmail(re.test(email));
    } else {
      setValidEmail(true);
    }
    if (message.length > 0) {
      setHasMessage(true);
    } else {
      setHasMessage(false);
    }
  }, [message]);

  const sendEmail = () => {
    if (hasEmail && hasMessage && hasName && validEmail) {
      alert("Email sent successfully");
    }
  };

  function displayValidationError() {
    return (
      <span
        hidden={validEmail}
        className="text-left w-full ml-2 text-xs my-2 text-red-500"
      >
        Invalid email address
      </span>
    );
  }

  return (
    <section id="contact" className="">
      <BlogHeader />
      <div className="flex flex-col items-center">
        <span className="ml-1 md:ml-1 xl:ml-4 ml-4">Contact</span>
        <form className="flex flex-col items-center mt-10 w-96 p-5 md:p-0">
          <input
            className="p-4 w-full m-2 bg-gray-100 rounded-md border-0 outline-none"
            placeholder="Name"
            name="name"
          ></input>
          <span
            hidden={hasName}
            className="text-left w-full ml-2 text-xs my-2 text-red-500"
          >
            Name is required
          </span>
          <input
            className="p-4 w-full m-2 bg-gray-100 rounded-md border-0 outline-none"
            placeholder="Email"
            name="email"
          ></input>
          <span
            hidden={hasEmail}
            className="text-left w-full ml-2 text-xs my-2 text-red-500"
          >
            email is required
          </span>
          {displayValidationError()}
          <textarea
            className="p-4 m-2 w-full max-h-full border-0 bg-gray-100 rounded-md outline-none"
            rows="4"
            placeholder="What's on your mind"
            name="message"
          ></textarea>
          <span
            hidden={hasMessage}
            className="text-left w-full ml-2 text-xs my-2 text-red-500"
          >
            message is required
          </span>
        </form>
        <Button onClick={sendEmail} className="bg-black text-white">
          Submit
        </Button>
      </div>
    </section>
  );
}
