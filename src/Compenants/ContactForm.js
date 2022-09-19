import React, { useState } from "react";
import { db } from "./firebase";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import "./ContactForm.css";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
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

    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setMessage("");
  };

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return <DialogTitle sx={{ m: 0, p: 2 }} {...other}></DialogTitle>;
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="buttonContainer" id="contact">
        <button
          className="FormButton"
          variant="outlined"
          onClick={handleClickOpen}
        >
          <svg
            className="ContactPlus"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="3.25em"
            width="3.25em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
              clip-rule="evenodd"
            ></path>
            <path
              fill-rule="evenodd"
              d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
              clip-rule="evenodd"
            ></path>
            <path
              fill-rule="evenodd"
              d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
              clip-rule="evenodd"
            ></path>
          </svg>
          CONTACT
          {/* <h4 className="textFields">CONTACT</h4> */}
        </button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <h3 className="formHeader">CONTACT ME</h3>
        <DialogContent>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="formInput"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="formInput"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="formInput"
              placeholder="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              className="formInput"
              placeholder="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              className="formInput"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              className="submitButton"
              onClick={handleClose}
              type="submit"
            >
              SUBMIT
            </button>
            <h4> Will.Valadez4@gmail.com</h4>
            <h4> 435-619-0588</h4>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
