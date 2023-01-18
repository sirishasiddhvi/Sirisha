import { TextField, Button, Box, Grid } from "@mui/material";

import React from "react";
import { useState } from "react";
const axios = require("axios");

export function AddStore() {
  const [store, setStore] = useState({
    num: "",
    code: "",
    name: "",
    date: "",
    city: "",
    state: "",
    region: "",
    type: "",
    status: "",
    footage: "",
  });
  const {
    num,
    code,
    name,
    date,
    city,
    state,
    region,
    type,
    status,
    footage,
  } = store;
  const storeChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const storeSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    const formdata = new FormData();
    formdata.append("storenum", num);
    formdata.append("code", code);
    formdata.append("name", name);
    formdata.append("date", date);
    formdata.append("city", city);
    formdata.append("state", state);
    formdata.append("region", region);
    formdata.append("type", type);
    formdata.append("status", status);
    formdata.append("footage", footage);
    axios.post("/route", formdata).then(function (res) {
      console.log("hi");
      if (res.data.status === true) {
        console.log("success");
      } else {
        console.log("failed");
      }
    });
  };
  return (
    <div>
      <Box
        sx={{
          borderRadius: "20px",
          backgroundColor: " #bfbfbf",
          width: "60%",
          border: "5px solid",
          borderColor: "#fbb828",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <form onSubmit={storeSubmit}>
            <center>
              <br />
              <TextField
                label="Store No."
                name="num"
                variant="outlined"
                value={num}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Store Code"
                name="code"
                variant="outlined"
                value={code}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Store Name"
                name="name"
                variant="outlined"
                value={name}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Store Opening Date"
                name="date"
                variant="outlined"
                value={date}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="City"
                name="city"
                variant="outlined"
                value={city}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="State"
                name="state"
                variant="outlined"
                value={state}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Region"
                name="region"
                variant="outlined"
                value={region}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Type"
                name="type"
                variant="outlined"
                value={type}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Status of Store"
                name="status"
                variant="outlined"
                value={status}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Footage"
                name="footage"
                variant="outlined"
                value={footage}
                onChange={storeChange}
              />
              <br />
              <br />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </center>
          </form>
          <br />
          <br />
        </Grid>
      </Box>
    </div>
  );
}
