import React from 'react';
import { useFormik } from 'formik';
import {TextField} from "@mui/material";

const CustomTextField = ({ label, ...props }) => {
  return (
    <TextField
      {...props}
      label={label}
    />
  );
};

export default CustomTextField;