import React from 'react';
import {Dialog,DialogContent,DialogContentText} from "@mui/material"

const CustomDialog = (props) => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
       <DialogContent>
              <DialogContentText >  {props.children}</DialogContentText>
    </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;