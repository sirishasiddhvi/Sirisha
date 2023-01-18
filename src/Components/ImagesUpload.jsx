import { TableBody, TableCell, TableContainer ,Table,TableHead,Box} from "@mui/material";
import React, { useState } from "react";
import image1 from "../Images/image1.jpeg";
import image2 from "../Images/image2.jpeg";
import image3 from "../Images/image3.jpeg";
import image4 from "../Images/image4.jpeg";
import image5 from "../Images/image5.jpeg";
import image6 from "../Images/image6.jpeg";

export const ImageUpload = () => {
  // const [profiles,setProfiles] = useState([]);
  const profiles = [
    { name: "lilly", images: [image1,image2] },
    { name: "rose", images: [image3,image4] },
    { name: "sunflower", images: [image5,image6] },
  ];
  return (
    <Box sx={{m:15}}>
     
    <TableContainer>
      <Table>
        <TableHead></TableHead>
       { profiles.map((profile)=>(
<TableBody>
    <TableCell>{profile.name}</TableCell>
    <TableCell>{profile.images.map((image)=>(<div><img src={image}/><br/></div>))}</TableCell>
</TableBody>
        ))}
      </Table>
    </TableContainer></Box>
  );
};
