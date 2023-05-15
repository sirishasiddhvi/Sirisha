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
import {Tablex} from "./exp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CkEditor } from "./Components/CkEditor";
import { Profile } from "./Components/Profile";
import { BootStrapEx } from "./Components/BootStrapEx";
import {Restful} from "./Components/RestFul"

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
      <Link to="/ckeditor">CkEditor</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/bootstrap">Bootstrap</Link>
      <br />
      <Link to="/restful">RestFul</Link>
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
        <Route path="AddEmp" element={<Tablex />} />
        <Route path="ckeditor" element={<CkEditor />} />
        <Route path="profile" element={<Profile />} />
        <Route path="bootstrap" element={<BootStrapEx />} />
        <Route path="restful" element={<Restful />} />
        {/* <Route path="AddEmp" element={<AddEmp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
