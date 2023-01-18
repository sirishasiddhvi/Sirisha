import React,{useState,useRef} from "react";
export function RefFile(){
const inputFile = useRef(null);
const [file, setFile] = useState([]);
const filehandle=()=>{
    inputFile.current.click();
    console.log(file);
}
const handleChange = e => {
    setFile([...file, e.target.files[0]]);
  }
 
return(
    <div>
        <input
  type="file"
  onChange={handleChange}
  ref={inputFile} 
  />
<button
  onClick={filehandle}>
  {/* <img src="https://www.svgrepo.com/show/12604/paper-clip.svg" /> */}
</button>
    </div>
)
}