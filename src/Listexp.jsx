import React, { useState } from "react";
import {
  Drawer,
  Toolbar,
  Divider,
  ListItemText,
  ListItemButton,
  List,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";
const drawerWidth = 240;

export function Listexp() {
const[color,setColor]=useState();

    const reportList=[
{id:"1",report:"Toggle sidebar"},
{id:"2", report:"Yearly reports"},
{id:"3", report:"Quaterly reports"},
{id:"4", report:"monthly reports"},
{id:"5", report:"Approval/Follow-up"},
{id:"6", report:"Store Info"},
{id:"7", report:"Contact Us"},
{id:"8", report:"Users"}];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#f2f2f2",
          border: "2px solid",
          borderColor: "#fbb828",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        {console.log(reportList[2].report)}
      <List>
        {reportList.map((obj)=><div>
            <Divider color="#fbb828" />

            <ListItemButton
              style={{
                height: "100px",
                backgroundColor:color===obj.id? "#fbb828" : "",
              }}
              onClick={()=>setColor(obj.id)}
            > 
              <ListItemText>  
              <Link
                  to={`/Dashboard/${obj.report}`}
                  style={{ textDecoration: "none", color: "black" }}
                >  
                  <b>{obj.report}</b>
                </Link>
              </ListItemText>
            </ListItemButton>
            </div>)}
      </List>
      </Box>
      </Drawer>
  )
    }