import React,{useState} from "react";

export function UploadFile(){
    const[file,setFile]=useState();
    const fileUpload=(e)=>{
        e.preventDefault();
        console.log('hi')
        console.log(file);

    }
    return(
        <div>
        <input type='file' name='file' value={file} 
        onChange={(e)=>setFile(e.target.value)}/>
        <button onClick={fileUpload}>upload</button>
        </div>
    )
}