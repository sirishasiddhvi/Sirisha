import { TextField, Button, Typography, Box } from "@mui/material";
import React, { useState, useContext } from "react";
import { SnackContext } from "./UserContext";
const axios = require("axios");

export function ContactUs() {
  const { snack, setSnack } = useContext(SnackContext);
  const [user, setUser] = useState({
    name: "",
    mobilenumber: "",
    email_id: "",
    location: "",
    subject: "",
    message: "",
  });
  const { name, mobilenumber, email_id, location, subject, message } = user;
  const userChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const userSubmit = (e) => {
    e.preventDefault();
    if (name.length < 1) {
      setSnack({
        message: "Enter your name",
        type: "error",
        open: true,
      });
    } else if (email_id.length < 1) {
      setSnack({
        message: "Enter your emailid",
        type: "error",
        open: true,
      });
    } else if (!email_id.includes("@")) {
      setSnack({
        message: "Enter proper emailid",
        type: "error",
        open: true,
      });
    } else if (mobilenumber.length < 1) {
      setSnack({
        message: "Enter your mobilenumber",
        type: "error",
        open: true,
      });
    } else if (mobilenumber.length !== 10) {
      setSnack({
        message: "Enter proper mobilenumber",
        type: "error",
        open: true,
      });
    } else if (location.length < 1) {
      setSnack({
        message: "Enter your location",
        type: "error",
        open: true,
      });
    } else if (subject.length < 1) {
      setSnack({
        message: "Enter your subject",
        type: "error",
        open: true,
      });
    } else if (message.length < 1) {
      setSnack({
        message: "Enter your message",
        type: "error",
        open: true,
      });
    } else {
      console.log(name);
      const formdata = new FormData();
      formdata.append("Name", name);
      formdata.append("Email", email_id);
      formdata.append("Mobile_no ", mobilenumber);
      formdata.append("Location", location);
      formdata.append("Subject", subject);
      formdata.append("Message", message);
      console.log(formdata);
      axios.post("/api/contact", formdata).then(function (res) {
        console.log(res);
        if (res.data.status === true) {
          console.log("hello");
        } else {
          console.log("hiiiii");
        }
      });
    }
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <Box
          sx={{
            borderRadius: "20px",
            backgroundColor: " #bfbfbf",
            height: "90%",
            width: "40%",
            border: "5px solid",
            borderColor: "#fbb828",
          }}
        >
          {" "}
          <br />
          <Typography variant="h3">Enter your details</Typography>
          <br />
          <br />
          <form onSubmit={userSubmit}>
            <br />

            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={userChange}
              required
              sx={{ borderColor: "#fbb828" }}
            />
            <br />
            <br />
            <TextField
              label="Email"
              variant="outlined"
              name="email_id"
              value={email_id}
              onChange={userChange}
              required
            />
            <br />
            <br />
            <TextField
              label="Mobile"
              variant="outlined"
              name="mobilenumber"
              value={mobilenumber}
              onChange={userChange}
              required
            />
            <br />
            <br />
            <TextField
              label="Location"
              variant="outlined"
              name="location"
              value={location}
              onChange={userChange}
              required
            />
            <br />
            <br />
            <TextField
              label="Subject"
              variant="outlined"
              name="subject"
              value={subject}
              onChange={userChange}
              required
            />
            <br />
            <br />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              name="message"
              value={message}
              onChange={userChange}
              required
            />
            <br />
            <br />
            <Button variant="contained" type="submit" sx={{ width: "60%" }}>
              Submit
            </Button>
            <br />
            <br />
          </form>
        </Box>
      </center>
    </div>
  );
}
