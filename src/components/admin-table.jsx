import { TableContainer, Table, TableHead, TableRow, TableCell,TableBody, Paper } from '@material-ui/core'
import React from 'react'
import { Delete, Edit } from '@mui/icons-material';

export const AdminTable = (props) => {
    const { id, productName, price, productImg } = props.data;
   
  return (
            <TableRow>           
                <TableCell>{id}</TableCell>
                <TableCell><img width={50} height={50} src={productImg}/></TableCell>  
                <TableCell>{productName}</TableCell>
                <TableCell>$ {price}</TableCell>
                <TableCell><Edit/> <Delete/></TableCell>
            </TableRow>     
  )
}
