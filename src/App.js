import React,{useState} from "react";
import './App.css';
import { AddEmp } from "./Components/AddEmp";
// import { createContext,useState } from 'react';
// //import ToDoList from './ToDoList';
// //import { LStorage } from './LStorage';
// //import { Dashboard } from './Dashboard';
// import {Data} from './Data';
// import { Login} from './Login';
// import { Logout} from './Logout';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { SimpleSnackbar } from './SimpleSnackbar';
// import { LStorage } from './LStorage';
// import { ContactUs } from './ContactUs';
// import { Fileupload} from './Fileupload';

// import { Listexp } from './Listexp';
// import { QuaterlyReports } from './QuaterlyReports';
// import { RefFile } from './RefFile';
 //import { Graphs } from './Graphs';
// import {UseReducer}from "./UseReducer";
// export const UserContext=createContext()
 import Badge from "./Components/Badge";
 import Card from "./Components/Card";
import { ImageUpload } from "./Components/ImagesUpload";
import { Sample } from "./Sample";

function App() {

  const[name,setName]=useState("sirisha");
  return (
    <div >
      {/*<UserContext.Provider value={name}>
      <Data/>
      </UserContext.Provider>
    <Dashboard />    <LStorage />
  
   <SimpleSnackbar/>
   <Login/>
   <LStorage/>
   <ContactUs/>
   <QuaterlyReports/>
   <Graphs/>
 <Fileupload/> 
<UseReducer/>  */}  
{/* 
<Badge/>
<Card/> */}
{/* <ImageUpload /> */}
{/* <AddEmp/> */}
<Sample/>
 </div>
  );
}

export default App;
