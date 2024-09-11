// src/components/Contact.js
import { Button } from "antd";
import React, { useEffect } from "react";
import BlogHeader from "../menu_components/BlogHeader";
import "../../App.css";

export default function Contact() {
  const [hasEmail, setHasEmail] = React.useState(true);
  const [hasMessage, setHasMessage] = React.useState(true);
  const [hasName, setHasName] = React.useState(true);
  const [validEmail, setValidEmail] = React.useState(true);
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

  function displayValidationError(hiddenStatus, message) {
    return (
      <span
        hidden={hiddenStatus}
        className="text-left w-full ml-2 text-xs my-2 text-red-500"
      >
        {message}
      </span>
    );
  }

  return (
    <section id="contact" className="">
      <BlogHeader />
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">Contact</span>
        <form className="flex flex-col items-center mt-10 w-96 p-5 md:p-0">
          <input
            onChange={(e) => setName(e.target.value)}
            className="p-4 w-full m-2 bg-gray-100 rounded-md border-0 outline-none"
            placeholder="Name"
            name="name"
          ></input>
          <displayValidationError
            hidden={hasName}
            message={errorMessage.name}
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 w-full m-2 bg-gray-100 rounded-md border-0 outline-none"
            placeholder="Email"
            name="email"
          ></input>
          <displayValidationError
            hidden={hasEmail}
            message={errorMessage.email}
          />
          <displayValidationError
            hidden={validEmail}
            message={errorMessage.validEmail}
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 m-2 w-full max-h-full border-0 bg-gray-100 rounded-md outline-none"
            rows="4"
            placeholder="What's on your mind"
            name="message"
          ></textarea>
          <displayValidationError
            hidden={hasMessage}
            message={errorMessage.message}
          />
        </form>
        <Button onClick={sendEmail} className="button-submit">
          Submit
        </Button>
      </div>
    </section>
  );
}
