import React from 'react';
import {Typography}from "@mui/material"

const CustomTypography = (props) => {
  return (
    <Typography variant={props.variant}
    align={props.align}
    color={props.color}>
      {props.children}
    </Typography>
  );
};

export default CustomTypography;