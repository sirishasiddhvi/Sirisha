import React, { useState } from "react";
import { Box, TextField, Button, Grid, Typography } from "@mui/material";
import light from "./login.png";
import { Container } from "@mui/system";
import axios from "axios";

export function Sample() {
  const [user, setUser] = useState({
    mobilenumber: "",
    password: "",
  });
  const userChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const userSubmit = async (e) => {
    e.preventDefault();
    if (user.mobilenumber.length === 0) {
      alert("Please enter a  mobile number or emailid...")
    } else if (isNaN(user.mobilenumber) && !user.mobilenumber.includes("@")) {
     alert("Please enter a valid emailid...")
    } else if (!isNaN(user.mobilenumber) && user.mobilenumber.length !== 10) {
     alert("Please enter a valid mobile number...")
    } else if (user.password.length === 0) {
     alert( "Please Enter a Password...")
    } else if (user.password.length < 6) {
      alert("password length should be 6 characters...")
    } else {
      console.log(user.mobilenumber);
      const formdata = new FormData();
      formdata.append("uname", user.mobilenumber);
      formdata.append("pass", user.password);
      await axios.post("/api/login", formdata).then(function (res) {
        if (res.data.status === true) {
          alert("Login Successfully...!")
        } else {
         alert("Wrong Credentials...")
        }
      });
    }
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "#d9d9d9",
            m: 20,
            p: 3,
          }}
        >
          <Grid container direction="row">
            <Grid item xs={12} md={6} lg={6}>
              <img src={light} style={{ height: "100%", width: "100%" }} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ p: 5 }}>
                {/* <Typography variant="h2">Login</Typography>  */}
                <form onSubmit={userSubmit}>
                  <TextField
                    size="small"
                    label="mobilenumber"
                    variant="outlined"
                    name="mobilenumber"
                    value={user.mobilenumber}
                    onChange={userChange}
                    sx={{ width: "95%", m: 2 }}
                  />
                  <TextField
                    size="small"
                    label="password"
                    variant="outlined"
                    name="password"
                    value={user.password}
                    type="password"
                    onChange={userChange}
                    sx={{ width: "95%", m: 2 }}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ width: "95%", m: 2 }}
                  >
                    submit
                  </Button>{" "}
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
