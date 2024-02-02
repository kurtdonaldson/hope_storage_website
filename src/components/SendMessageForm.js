import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../components/SendMessageForm.css";

export default function SendMessageForm() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");

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

      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group controlId="formName">
          <FloatingLabel controlId="floatingInput" label="Name">
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Control
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
          />
        </Form.Group>
        <Form.Group controlId="formSubject">
          <Form.Control
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={(event) => setSubject(event.target.value)}
            value={subject}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Control
            type="text"
            rows={4}
            name="message"
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            required
          />
        </Form.Group>
        <Button
          className="sendBtn"
          variant="primary"
          type="submit"
          value="Send"
        >
          Submit Form
        </Button>
      </Form>
    </div>
  );
}
