import React, { useState } from "react";
import { database } from "../Compenants/firebase";
import "./ContactForm.css";

export default function FormDialog() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    database
      .collection("contacts")
      .add({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert(
          "Message has been submitted! Thanks for reaching out! I will get back to you shortly."
        );
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Company</label>
      <input
        placeholder="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <label>Phone</label>
      <input
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
}
