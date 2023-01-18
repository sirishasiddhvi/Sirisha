import React, { useState } from "react";
import { Avatar, Button, Card, CardContent, CardHeader, IconButton, Menu,Grid, MenuItem, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Bluerose from './Bluerose.jpg';
import Nature from './Nature.jpg';

export function Dashboard() {
  const [announcement, setAnnouncement] = useState("");
  console.log(announcement);
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <Grid container
    justifyContent='center'>
    <Card sx={{ maxWidth: 345 }}>
     <TextField
        fullWidth
        label="Announcement"
        multiline
        rows={4}
        onChange={(e) => { setAnnouncement(e.target.value) }}
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'error' }} aria-label="recipe" src={Bluerose} />

        }
        action={<div>
          <IconButton aria-label="more" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchor}
            open={open}
            onClose={handleClose}>
            <MenuItem onClick={handleClose }>Add</MenuItem>
            <MenuItem onClick={handleClose }>Delete</MenuItem>
          </Menu></div>
        }
        title="Sirisha"
        subheader="September 14, 2021"
      /><Card ><CardContent>
        <img src={Nature}
          style={{ height: "270px", width: "320px" }} ></img>
        <Typography variant="h4">Love to breathe, save the trees.</Typography>
      </CardContent>
      </Card>
    </Card></Grid>
  )
} 