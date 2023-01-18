import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  MenuItem,
  InputAdornment,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import countrydata from "./countrydata.json";
export function Statedropdown() {
  const [statename, setStateName] = useState("");
  const [city, setCity] = useState([]);
  const [cityname, setCityname] = useState("");

  const handlestate = (e) => {
    const getstateName = e.target.value;
    const getCitydata = countrydata.find(
      (state) => state.state_name === getstateName
    ).cities;
    setCity(getCitydata);
    setStateName(getstateName);
    console.log(getstateName);
  };

  const handlecity = (e) => {
    const cityname = e.target.value;
    console.log(cityname);
    setCityname(cityname);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Get state name" + statename + " And " + cityname);
  };

  return (
    <Container className="content">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="mt-3">
            Select Country and State from JSON file in React js
          </h3>
          <form className="row g-3" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="select"
              label="state"
              name="state"
              // value={state}
              select
              onChange={(e) => handlestate(e)}
            >
              <MenuItem value="">--Select state--</MenuItem>
              {countrydata.map((getstate, index) => (
                <MenuItem value={getstate.state_name} key={index}>
                  {getstate.state_name}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <TextField
              select
              label="City"
              name="city"
              variant="outlined"
              onChange={(e) => handlecity(e)}
            >
              <MenuItem value="">--Select city--</MenuItem>
              {city.map((getcity, index) => (
                <MenuItem value={getcity.city_name} key={index}>
                  {getcity.city_name}
                </MenuItem>
              ))}
            </TextField>

            <div className="col-md-2" style={{ padding: "9px" }}>
              <label className="form-label"> </label>
              <div className="text-dark">
                <button name="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
