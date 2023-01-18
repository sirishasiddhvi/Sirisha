import React,{useEffect, useState} from "react";
import{Box}from "@mui/material"
import { BarChart,LineChart,PieChart } from 'react-charts-d3';
export function Graphs(){
    const data = [
        { key: 'Group 1', values: [ { x: 'A', y: 23, r: 40}, { x: 'B', y: 8, r: 19 } ] },
        { key: 'Group 2', values: [ { x: 'A', y: 15, r: 11 }, { x: 'B', y: 37, r: 21 } ] },
      ];
    return(
        <div>
            <Box sx={{m:5}}>
        <BarChart data={data} /></Box>
        <Box sx={{m:5}}>
        <LineChart data={data} /></Box>
        
        
        </div>
    )
}