import React from 'react';
import {TableBody,TableCell,TableRow,Table,TableHead,IconButton} from "@mui/material"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const CustomTable = (props) => {
  return (
    <Table 
    stickyHeader
    size={props.size}>
      <TableHead>
        {props.columns.map((column)=>(
          <TableCell>{column.label}</TableCell>
        ))}
        <TableCell>Edit</TableCell>
        <TableCell>Delete</TableCell>
      </TableHead>
      <TableBody>
        {props.data.map((row) => (
          <TableRow key={row.id}>
            {props.columns.map((column) => (
              <TableCell key={column.id}>
                {row[column.id]}
              </TableCell>
            ))}
            <TableCell>
            <IconButton>
          <EditOutlinedIcon
          onClick={()=> props.editClick(row.user_id)}
              />
        </IconButton>
              </TableCell>
              <TableCell>
              <IconButton>
          <DeleteOutlineOutlinedIcon
          onClick={()=> props.deleteClick(row?.user_id)}
          />
        </IconButton>
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;