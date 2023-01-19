import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
} from "@mui/material";

export function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opens, setOpens] = useState(false);

  const handlesClick = () => {
    setOpens(true);
  };
  const handlesClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpens(false);
  };
  return (
    <div>
      <button variant="contained" onClick={handleClick}>
        Login
      </button>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            // border: '2px solid',
            //borderRadius: '12px',
            backgroundColor: "success.light",
            margin: "auto",
            height: "400px",
            width: "400px",
          }}
        >
          <center>
            <DialogContent>
              <DialogContentText>
                <br />
                <br />
                <br />
                <TextField
                  label="username"
                  variant="outlined"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <br />
                <br />
                <TextField
                  label="password"
                  variant="outlined"
                  name="password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <br />

                <Button variant="contained" onClick={handlesClick}>
                  Login
                </Button>
                <Snackbar
                  open={opens}
                  autoHideDuration={6000}
                  onClose={handlesClose}
                  message="Login successfully"
                />
              </DialogContentText>
            </DialogContent>
          </center>
        </Box>
      </Dialog>
    </div>
  );
}
