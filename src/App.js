import React, { useState } from "react";
import "./App.css";
import { AddEmp } from "./Components/AddEmp/AddEmp";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { LStorage } from "./LStorage";
import { Fileupload } from "./Fileupload";
import { RefFile } from "./RefFile";
import { Graphs } from "./Graphs";
import { UseReducer } from "./UseReducer";
import { Statedropdown } from "./Statedropdown";
import { ImageUpload } from "./Components/ImagesUpload";
import { SampleLogin } from "./SampleLogin";
import ToDoList from "./ToDoList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Dashboard</Link>
      <br />
      <Link to="/reducer">Reducer</Link>
      <br />
      <Link to="/LStorage">LStorage</Link>
      <br />
      <Link to="/Login">Login</Link>
      <br />
      <Link to="/RefFile">RefFile</Link>
      <br />
      <Link to="/Graphs">Graphs</Link>
      <br />
      <Link to="/ImageUpload">ImageUpload</Link>
      <br />
      <Link to="/Fileupload">Fileupload</Link>
      <br />
      <Link to="/SampleLogin">SampleLogin</Link>
      <br />
      <Link to="/Statedropdown">Statedropdown</Link>
      <br />
      <Link to="/ToDoList">ToDoList</Link>
      <br />
      <Link to="/AddEmp">AddEmp</Link>
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="reducer" element={<UseReducer />} />
        <Route path="LStorage" element={<LStorage />} />
        <Route path="Login" element={<Login />} />
        <Route path="RefFile" element={<RefFile />} />
        <Route path="Graphs" element={<Graphs />} />
        <Route path="ImageUpload" element={<ImageUpload />} />
        <Route path="Fileupload" element={<Fileupload />} />
        <Route path="SampleLogin" element={<SampleLogin />} />
        <Route path="Statedropdown" element={<Statedropdown />} />
        <Route path="ToDoList" element={<ToDoList />} />
        <Route path="AddEmp" element={<AddEmp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
