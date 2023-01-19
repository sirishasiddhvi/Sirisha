import { useState ,useRef,useCallback} from "react";
import axios from "axios";

export const useEmp = () => {
  const [emp, setEmp] = useState({
    name: "",
    emp_id: "",
    msn_id: "",
  });
  const webcamRef = useRef(null);
  const videoConstraints={
    height:200,
    width:200,
facingMode:"user"
}
  const empChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const capture =useCallback((e)=>{
    e.preventDefault();
    const imageSrc=webcamRef.current.getScreenshot();
    console.log(imageSrc);
    console.log(emp.emp_id);
    alert("Successfully Added...!!");
    },[webcamRef])

  const empSubmit = async (e) => {
    e.preventDefault();
    console.log(emp.emp_id);
    alert("Successfully Added...!!");
    // const formdata = new FormData();
    // formdata.append("", emp.name);
    // formdata.append("", emp.emp_id);
    // formdata.append("", emp.msn_id);
    // formdata.append("", emp.images.raw);
    // await axios.post("/add_category", formdata).then(function (res) {
    //   console.log("hiiiii");
    //   if (res.data.status === 1) {
    //     alert("added");
    //   } else {
    //     alert("not added");
    //   }
    // });
  };
  return [emp, empChange, empSubmit, webcamRef, capture,videoConstraints];
};
