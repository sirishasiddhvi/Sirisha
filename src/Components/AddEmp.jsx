import React from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import { useEmp } from "./AddEmpFn";
import Webcam from "react-webcam";

export const AddEmp = () => {
  const [emp, empChange, empSubmit, webcamRef, capture,videoConstraints] = useEmp();
  return (
    <Container maxWidth="sm">
      <Box sx={{ m: 10, p: 3, boxShadow: 2, borderRadius: 6 }}>
        <form onSubmit={capture}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h5">Add Employee Details</Typography>
            <TextField
              type="text"
              size="small"
              name="name"
              label="Employee Name"
              value={emp.name}
              onChange={empChange}
              sx={{ m: 2 }}
            />
            <TextField
              type="number"
              size="small"
              name="emp_id"
              label="Employee Id"
              value={emp.emp_id}
              onChange={empChange}
              sx={{ m: 2 }}
            />
            <TextField
              type="text"
              size="small"
              name="msn_id"
              label="MSN Id"
              value={emp.msn_id}
              onChange={empChange}
              sx={{ m: 2 }}
            />
            <Webcam
              audio={false}
              ref={webcamRef}
              height={300}
              width={350}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            ></Webcam>
            <Button size="small" type="submit" variant="contained">
              Add
            </Button>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};
