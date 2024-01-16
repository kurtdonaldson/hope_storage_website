import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function SendMessageForm() {
  const form = useRef();

  console.log(process.env.REACT_APP_SERVICE_ID);
  console.log(process.env.REACT_APP_TEMPLATE_ID);
  console.log(process.env.REACT_APP_PUBLIC_KEY);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          alert("Message NOT sent", error);
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="sendMessageFormDiv">
      <h3>Send us a message</h3>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          onSubmit={sendEmail}
          ref={form}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <div>
          <input className="sendBtn" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}
