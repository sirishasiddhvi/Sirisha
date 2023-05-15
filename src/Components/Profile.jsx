import React,{useState}from "react"
import {Card,Box, Container,Tooltip,Button,Typography} from "@mui/material"
import ProfileUi from 'react-profile-card';
import "./style.css"
import white from "./image1.jpeg"
export const Profile=()=>{
console.log("nkjjkn")
    return(<Container maxWidth="sm">
         {/* <ProfileUi 
          imgUrl='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg' 
          name='vineet jk' 
          designation='designer  bnjidfvn  sdofmnsdkl  fnmgsjgp' 
         /> */}
       <Box boxShadow={5}sx={{height:350, width:300,borderColor:"#4c004c" ,borderRadius:8}}>
         {/* <Box sx={{height:120 ,background:"#4c004c"}}> */}
         <div  className="image-container img" boxShadow={7}
        // sx={{height:50, width:50,borderRadius:100,
        //     background:"white",p:5,m:10}}

           >
            <img src={white}/>
           </div>
           <div >
                            <Typography
                              variant="h5"align="center"
                              style={{
                                lineHeight: "1.5",
                                // color: theme.palette.secondary.main,
                              }}
                            >
                              {/* {team.name.charAt(0).toUpperCase() +
                                team.name.slice(1)} */}
James
                            </Typography>
                            <Typography align="center"
                              variant="h6"
                              style={{
                                // color: theme.palette.secondary.main,
                                lineHeight: "1.5",
                              }}
                            >
                              {/* {team.designation
                                .split(" ")
                                .map(
                                  (desg) =>
                                    desg.charAt(0).toUpperCase() +
                                    desg.slice(1) +
                                    " "
                                )} */}
                                UI Developer
                            </Typography>
                            <br />
                            <Typography
                              variant="body1"
                              style={{
                                // color: theme.palette.secondary.main,
                                textAlign: "justify",
                                color: "#000000",
                                lineHeight: "1.5",
                              }}
                            >
                              <b> Skills: </b>
                              {/* {team.skill
                                .split(",")
                                .map(
                                  (skil) =>
                                    skil.charAt(0).toUpperCase() +
                                    skil.slice(1) +
                                    ","
                                )} */}
                                React,Flask
                            </Typography>
                            <Typography
                              style={{ textAlign: "justify", color: "#000000" }}
                            >
                              {/* <span>
                                <img src={quotation} height="9%" width="9%" />
                              </span>
                              &nbsp;{team.description}&nbsp;
                              <span>
                                {" "}
                                <img src={quotation1} height="5%" width="5%" />
                              </span> */}
                              Very Hard Working
                            </Typography>
                          </div>
        </Box>
        {/* </Box> */}
        </Container>
    )
}