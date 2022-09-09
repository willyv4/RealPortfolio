import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";
import "./ContactForm.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="#000"
              stroke-width="2"
              d="M3,3 L21,21 M3,21 L21,3"
            ></path>
          </svg>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="buttonContainer">
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
            height="3em"
            width="3em"
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
          <p className="contactText">Contact</p>
        </button>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Say Hello!
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="textFields">
            <TextField
              sx={{ m: 2 }}
              id="filled-Company-input"
              label="Company"
              type="none"
              variant="filled"
            />
            <TextField
              sx={{ m: 2 }}
              id="filled-full-name-input"
              label="Full Name"
              type="none"
              variant="filled"
            />
            <TextField
              sx={{ m: 2 }}
              id="filled-email-input"
              label="Email"
              type="none"
              variant="filled"
            />
            <TextField
              sx={{ m: 2 }}
              id="filled-phone-number-input"
              label="Phone Number"
              type="none"
              variant="filled"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
