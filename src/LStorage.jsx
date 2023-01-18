
import { TextField, Button,Box, IconButton, InputAdornment } from "@mui/material";
// import axios from "axios";
import React, { useState, createContext } from "react";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';

export function LStorage() {
    const [user, setUser] = useState({
        fullname: "",
        username: "",
        password: ""
    });
    // const { userprofile, setUserProfile } = useContext(UserContext); 
    const { fullname, username, password } = user;
    const userChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullname.length < 1) {
            alert("Please enter name");
        } else if (!username.endsWith('@gmail.com')) {
            alert("Please enter valid email.id");
        } else if (password.length < 6) {
            alert("Password should have atleast 6 digits");
        } else {
            console.log(fullname);
            console.log(username);
            console.log(password);
            console.log(user);
            localStorage.setItem('user', user.fullname);
    //sessionStorage.setItem('user', user.fullname);
        }
    }
    return (
       
        <Box sx={{
            border: '2px solid',
            borderRadius: '20px',
            backgroundColor: 'lightblue',
            margin: 'auto',
            height: '600px',
            width: '400px',

        }}>
            <center><br /><IconButton size="large" color="inherit" edge='start'>
                <  GroupAddIcon />
            </IconButton>
                <h2>SignIn Form</h2>
                <br />
                <TextField label="fullname" variant="outlined"
                    name="fullname" value={fullname} onChange={userChange}
                    helperText={!fullname ? 'required' : 'ok'} /><br /><br />
                <TextField label="username" variant="outlined" name="username"
                    value={username} onChange={userChange} /><br /><br />
                <TextField label="password" variant="outlined" name="password"
                    value={password} type="password" onChange={userChange}
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>
                            <VisibilityIcon size='small' />
                        </InputAdornment>
                    }}
                /><br /><br />
                <Button variant='contained'
                    onClick={handleSubmit}>Login</Button><br/>
                </center>
        </Box>
    )
}