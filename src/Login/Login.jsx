import React, { useState } from "react";
import {
  Paper,
  Button,
  Link,
  InputAdornment,
  IconButton,
  MenuItem,
} from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import CustomBox from "../../Reusable/CustomBox";
import CustomTextField from "../../Reusable/CustomTextfield";
import CustomTypography from "../../Reusable/CustomTypography";
import  CustomGrid from "../../Reusable/CustomGrid";
import FormikButton from "../../Reusable/FormikButton";
import { useLogin } from "./LoginFunction";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CustomDialog from "../../Reusable/CustomDilog";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 480,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
  const [formik, loading] = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <CustomBox m={15}>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Paper elevation={10} style={paperStyle}>
          <CustomGrid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <CustomTypography variant="h4"> Login </CustomTypography>

            <CustomTextField
             
              size="small"
              label="User Email"
              placeholder="Enter User Email"
              name="uname"
              variant="standard"
              value={formik.values.uname}
              onChange={formik.handleChange}
              error={formik.touched.uname && Boolean(formik.errors.uname)}
              onBlur={formik.handleBlur}
              fullWidth
              // sx = {{m:2}}
            />
            {formik.touched.uname && formik.errors.uname ? (
              <div className="texterror" style={{ color: "red" }}>
                <CustomTypography variant="caption">
                  {formik.errors.uname}
                </CustomTypography>
              </div>
            ) : null}

            <CustomTextField
              size="small"
              label="Password"
              variant="standard"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              name="pass"
              value={formik.values.pass}
              onChange={formik.handleChange}
              error={formik.touched.uname && Boolean(formik.errors.uname)}
              onBlur={formik.handleBlur}
              fullWidth
              // sx = {{m:2}}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.pass && formik.errors.pass ? (
              <div className="texterror" style={{ color: "red" }}>
                <CustomTypography variant="caption">
                  {formik.errors.pass}
                </CustomTypography>
              </div>
            ) : null}
            <CustomTextField
              select
              label="User Role"
              variant="standard"
              placeholder="Enter Your Role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              error={formik.touched.role && Boolean(formik.errors.role)}
              onBlur={formik.handleBlur}
              fullWidth
              // sx = {{m:2}}
            >
              <MenuItem value="101">Super Admin</MenuItem>
              <MenuItem value="201">Admin</MenuItem>
              <MenuItem value="301">Customer Success Team</MenuItem>
              <MenuItem value="401">Command Center Team</MenuItem>
              <MenuItem value="501">Client</MenuItem>
              <MenuItem value="601">Finance</MenuItem>
              <MenuItem value="701">Management</MenuItem>
              <MenuItem value="801">Service Team</MenuItem>
            </CustomTextField>
            {formik.touched.role && formik.errors.role ? (
              <div className="texterror" style={{ color: "red" }}>
                <CustomTypography variant="caption">
                  {formik.errors.role}
                </CustomTypography>
              </div>
            ) : null}
            <FormikButton
              size="small"
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
              disabled={
                !(formik.isValid && formik.dirty) || formik.isSubmitting
              }
            >
              Login
            </FormikButton>
            <CustomTypography>
              <Link href="/forgot_pass">Forgot password ?</Link>
            </CustomTypography>
          </CustomGrid>
        </Paper>
      </form>
      <CustomDialog open={loading} onClose={() => {}}>
        <CustomGrid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton>
            <CircularProgress />
          </IconButton>
          <CustomTypography variant="h5">Please Wait...</CustomTypography>
        </CustomGrid>
      </CustomDialog>
    </CustomBox>
  );
};

export default Login;
