import React from 'react';
import {Box} from "@mui/material"

const CustomBox = (props) => {
  return (
    <Box 
      p={props.p}
      m={props.m}
      bgcolor={props.bgcolor}  
      flexGrow={props.flexGrow} 
      boxShadow={props.boxShadow}
      width={props.width}
    >
      {props.children}
    </Box>
  );
};

export default CustomBox;