import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import FloatingLabel from "react-bootstrap/FloatingLabel";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  FormControl,
  FormGroup,
  createTheme,
  ThemeProvider,
} from "@mui/material";

export default function SendMessageForm() {
  const theme = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: { color: "red" },
        },
      },
    },
  });

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
      <ThemeProvider theme={theme}>
        <form ref={form} onSubmit={sendEmail}>
          <FormGroup>
            <FormControl>
              <TextField
                label="Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
              ></TextField>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl>
              <TextField
                label="Email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
              ></TextField>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl>
              <TextField
                label="Phone"
                name="phone"
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
              ></TextField>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl>
              <TextField
                label="Subject"
                name="subject"
                onChange={(event) => setSubject(event.target.value)}
                value={subject}
                required
              ></TextField>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl>
              <TextField
                label="Message"
                rows={4}
                name="message"
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                required
              ></TextField>
            </FormControl>
          </FormGroup>
          <Button
            style={{ textTransform: "none" }}
            className="sendBtn"
            variant="primary"
            type="submit"
            value="Send"
          >
            Submit Form
          </Button>
        </form>
      </ThemeProvider>
    </div>
  );
}
