import React from "react"
import {Button} from "@mui/material"

const CustomButton = (props)=>{
    return(
         <Button
        // fullWidth
        size={props.size}
        variant={props.variant}
        type={props.type}
        onClick={props.onClick}
        m={props.m}
        width={props.width}
        color={props.color}
        >{props.label} </Button>
    )
}
export default CustomButton; 