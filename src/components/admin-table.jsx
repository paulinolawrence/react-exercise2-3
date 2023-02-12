import { TableRow, TableCell } from '@material-ui/core'
import React, {useContext} from 'react'
import { Delete, Edit } from '@mui/icons-material';
import { ShopContext } from '../context/shop-context';
import { IconButton } from '@mui/material';
import { AddProduct } from '../pages/admin/add-product';
import { EditProduct } from '../pages/admin/edit-product';

export const AdminTable = (props) => {
    const { id, productName, price, productImg } = props.data;
    const { deleteProduct, } = useContext(ShopContext);
    console.log(props.data)
   
  return (
    <TableRow key={id}>           
      <TableCell>{id}</TableCell>
      <TableCell><img width={50} height={50} src={productImg}/></TableCell>  
      <TableCell>{productName}</TableCell>
      <TableCell>$ {price}</TableCell>
      <TableCell>
          <IconButton sx={{"&:hover": {color: 'blue'}}} onClick={ () => <EditProduct data={props.data}/>}><Edit/> </IconButton>
          <IconButton sx={{"&:hover": {color: 'red'}}} onClick={ () => deleteProduct(id)}><Delete/> </IconButton> 
      </TableCell>
    </TableRow>     
  )
}
