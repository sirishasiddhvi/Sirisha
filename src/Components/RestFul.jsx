import React,{useEffect, useState} from "react"
import {Box, TableCell, TableContainer, TableHead,Table,TableRow,TableBody} from "@mui/material"
import axios from "axios"

export const Restful=()=>{
    const[data,setData]= useState()
useEffect(()=>{
axios.get(" http://localhost:8900/posts").then((res)=>{
    console.log(res.data)
    setData(res.data)
})
},[])
    return(
        <Box sx={{backgroundColor:"#a389d4",mx:25}}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Author</TableCell>
                        </TableRow>
                    </TableHead>
                    {data?.map((data)=>(
                    <TableBody>
                        <TableRow>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.title}</TableCell>
                            <TableCell>{data.author}</TableCell>
                        </TableRow>
                    </TableBody>
                    ))}
                </Table>
            </TableContainer>
        </Box>
    )
}