import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as yup from "yup";
import { SnackContext } from '../../context/context';

export const useLogin = () => {
    // const [state, setState] = useState({})
    const {setSnack} = useContext(SnackContext);
    const [loading,setLoading] = useState();

    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            uname: "",
            pass: "",
            role:""
        },
        validationSchema: yup.object({
            uname: yup
                .string()
                .email("Enter a valid email...")
                .required("Enter Your Email..."),

            pass: yup
                .string()
                .min(6, "Password length should be 6 characters...") 
                .required("Enter Your Password..."),
            role:yup
                .string()
                .required("Please select your Role...")          
        }),
        onSubmit: (state) => {
            console.log(state);
            try {
                setLoading(true)
                const formdata = new FormData();
                console.log(state)
                formdata.append("uname", state.uname);
                formdata.append("pass", state.pass);
                formdata.append("cat_id", state.role);
                console.log(formdata)
                axios.post("/api/user_login", formdata).then(function (res) {
                    console.log(res)
                    if (res?.data?.status === true) {
                        localStorage.setItem("uname", state.uname);
                        localStorage.setItem("pass", state.pass);
                        localStorage.setItem("role", state.role);
                        setLoading(false)
                        setSnack({
                            message: res.data.msg,
                            type: "success",
                            open: true,
                        });
                        navigate("/otp")
                    }else{
                        setSnack({
                            message: res.data.msg,
                            type: "success",
                            open: true,
                        });
                    }
                })
            } catch (err) {
                console.log("Error");
            }
        }
    })

    return [formik,loading]
}


