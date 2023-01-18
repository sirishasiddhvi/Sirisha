import {Table, TableCell, TableContainer, TableRow ,TableHead,Box ,TableBody,Button, Typography} from "@mui/material";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import React from "react";

export function QuaterlyReports(){
    return(
      <div>
       
       <br/><br/>  <br/><br/>
       
        <Typography variant="h5">Quaterly Report Profile</Typography>
        <br/><br/><Box style={{padding:'15'}}>
                <TableContainer >
                    <Table >
                    <TableHead sx={{backgroundColor:'#d9d9d9'}}>
                        <TableRow>
                        <TableCell sx={{border:'2px solid'}}><b>Quater</b></TableCell>
                        <TableCell sx={{border:'2px solid'}}><b>Date of last bill receipt</b></TableCell>
                        <TableCell sx={{border:'2px solid'}}><b>Initial Report upload date</b></TableCell>
                        <TableCell sx={{border:'2px solid'}}><b>Approved Status</b></TableCell>
                        <TableCell sx={{border:'2px solid'}}><b>Approval Button</b></TableCell>
                        <TableCell sx={{border:'2px solid'}}><b>Download Report</b></TableCell>
                        <TableCell sx={{border:'2px solid'}}><b>Source bills</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{backgroundColor:'#f2f2f2'}}>
                        <TableRow>
                        <TableCell sx={{border:'2px solid'}}>Q1</TableCell>
                        <TableCell sx={{border:'2px solid'}}>20thJuly 2022</TableCell>
                        <TableCell sx={{border:'2px solid'}}>10th Aug 2022</TableCell>
                        <TableCell sx={{border:'2px solid'}}>Approved</TableCell>
                        <TableCell sx={{border:'2px solid'}}><Button variant='contained' color='success'>Approve</Button></TableCell>
                        <TableCell sx={{border:'2px solid'}}><Button variant='contained' color='warning'>Download<DownloadOutlinedIcon/></Button></TableCell>
                        <TableCell sx={{border:'2px solid'}}><Button variant='contained' color='error'>Download<DownloadOutlinedIcon/></Button></TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell sx={{border:'2px solid'}}>Q2</TableCell>
                        <TableCell sx={{border:'2px solid'}}>21 Sept 2022</TableCell>
                        <TableCell sx={{border:'2px solid'}}>11th Oct 2022</TableCell>
                        <TableCell sx={{border:'2px solid'}}>pending</TableCell>
                        <TableCell sx={{border:'2px solid'}}><Button variant='contained' color='success'>Approve</Button></TableCell>
                        <TableCell sx={{border:'2px solid'}}><Button variant='contained' color='warning'>Download<DownloadOutlinedIcon/></Button></TableCell>
                        <TableCell sx={{border:'2px solid'}}><Button variant='contained' color='error'>Download<DownloadOutlinedIcon/></Button></TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </TableContainer>
                </Box>
         </div>
    )
}