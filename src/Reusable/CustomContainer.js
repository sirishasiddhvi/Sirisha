import React from 'react';
import {Container} from "@mui/material"

const CustomContainer = (props) => {
  return (
    <Container maxWidth={props.maxWidth}>
      {props.children}
    </Container>
  );
};

export default CustomContainer;