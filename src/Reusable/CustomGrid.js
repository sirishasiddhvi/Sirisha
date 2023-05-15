import React from 'react';
import {Grid} from "@mui/material"

 const CustomGrid = (props) => {
  return (
    <Grid 
      container 
      direction={props.direction}
      spacing={props.spacing}
      alignItems={props.alignItems}
      justifyContent={props.justifyContent}
    >
      {props.children}
    </Grid>
  );
};
export default CustomGrid;

