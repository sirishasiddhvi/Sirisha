
import React, { useState, useEffect } from "react";
const axios = require("axios");

export function Edit() {
  let id = useParams();
  const [store, setStore] = useState({
    num: "",
    code: "",
    name: "",
    date: "",
    city: "",
    state: "",
    region: "",
    type: "",
    status: "",
    footage: "",
  });

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const formData = new FormData();
    formData.append("id", id);
    axios.get("/route").then((res) => {
      if (res.data.status === true) {
        setStore({
          num: res.data.data.num,
          code: res.data.data.code,
          name: res.data.data.name,
          date: res.data.data.date,
          city: res.data.data.city,
          state: res.data.data.state,
          region: res.data.data.region,
          type: res.data.data.type,
          status: res.data.data.status,
          footage: res.data.data.footage,
        });
        console.log(name);
      }
    });
  };
  const editStore = (e) => {
    e.preventDefault();
    console.log(name);
    const formdata = new FormData();
    formdata.append("storenum", num);
    formdata.append("code", code);
    formdata.append("name", name);
    formdata.append("date", date);
    formdata.append("city", city);
    formdata.append("state", state);
    formdata.append("region", region);
    formdata.append("type", type);
    formdata.append("status", status);
    formdata.append("footage", footage);
    axios.post("/route", formdata).then(function (res) {
      console.log("hi");
      if (res.data.status === true) {
        console.log("success");
      } else {
        console.log("failed");
      }
    });
  };

  return (
    <div>
      <Box
        sx={{
          borderRadius: "20px",
          backgroundColor: " #bfbfbf",
          width: "60%",
          border: "5px solid",
          borderColor: "#fbb828",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <form onSubmit={storeSubmit}>
            <center>
              <br />
              <TextField
                label="Store No."
                name="num"
                variant="outlined"
                value={store.num}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Store Code"
                name="code"
                variant="outlined"
                value={store.code}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Store Name"
                name="name"
                variant="outlined"
                value={store.name}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Store Opening Date"
                name="date"
                variant="outlined"
                value={store.date}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="City"
                name="city"
                variant="outlined"
                value={store.city}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="State"
                name="state"
                variant="outlined"
                value={store.state}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Region"
                name="region"
                variant="outlined"
                value={store.region}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Type"
                name="type"
                variant="outlined"
                value={store.type}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Status of Store"
                name="status"
                variant="outlined"
                value={store.status}
                onChange={storeChange}
              />
              <br />
              <br />
              <TextField
                label="Footage"
                name="footage"
                variant="outlined"
                value={store.footage}
                onChange={storeChange}
              />
              <br />
              <br />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </center>
          </form>
          <br />
          <br />
        </Grid>
      </Box>
    </div>
  );
}
