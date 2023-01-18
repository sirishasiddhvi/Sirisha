
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
const axios = require("axios");

export function View() {
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

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const formData = new FormData();
    formData.append("id", id);
    axios.get("/route").then((res) => {
      if (res.data.status === true) {
        setStore({
          num: res.data.data.num,
          code: res.data.data.code,
          name: res.data.data.name,
          date: res.data.data.date,
          city: res.data.data.city,
          state: res.data.data.state,
          region: res.data.data.region,
          type: res.data.data.type,
          status: res.data.data.status,
          footage: res.data.data.footage,
        });
        console.log(name);
      } else {
        console.log("failed");
      }
    });
  };
  return <div>
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
            <center>
            <Typography>Store No:{num}</Typography>
            <Typography>Store Code:{code}</Typography>
            <Typography>store Name:{name}</Typography>
            <Typography>Store Opening Date:{date}</Typography>
            <Typography>City:{city}</Typography>
            <Typography>State:{state}</Typography>
            <Typography>Region:{region}</Typography>
            <Typography>store Type:{type}</Typography>
            <Typography>Status:{status}</Typography>
            <Typography>Footage:{footage}</Typography>
            </center>
            </Grid></Box>
  </div>;
}
