import React from 'react';
import { useFormik } from 'formik';
import {Button} from "@mui/material";

const FormikButton = ({ label, ...props }) => {
  return (
     <Button
      {...props}
      label={label}
    />
  );
};

export default FormikButton;