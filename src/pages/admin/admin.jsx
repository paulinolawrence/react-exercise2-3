import React, {useContext} from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell,TableBody, Paper, Grid, Button } from "@mui/material";
import  Add  from "@mui/icons-material/Add";
import { AdminTable } from '../../components/admin-table'
import { Link } from "react-router-dom";
import { ShopContext } from '../../context/shop-context';

export const Admin = () => {
const { products } = useContext(ShopContext);
  return (
    <>
    <br/>
    <Grid container spacing={3} justifyContent="center" textAlign="right">
        <Grid item xs={5}>
            <Button
            sx={{ 
                color: 'black', ":hover": {
                    border: 1,
                    color: 'black',
                },
                backgroundColor: 'white', }} 
            variant="text"
            startIcon={<Add />}
            LinkComponent={Link}
            to="/product/add"
            >
            Add Product
            </Button>
        </Grid>
    </Grid>
    <Grid container spacing={3} justifyContent="center" textAlign="right">
        <Grid item xs={5}>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (     
                    <AdminTable data={product} key={product.id}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
    </Grid>
    </>
  )
}
