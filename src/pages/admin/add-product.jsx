import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import Joi from "joi";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const AddProduct = (initialValue) => {
  const [form, setForm] = useState(
   {
    productName: "",
    price: "",
    productImg: "", 
  })

  const { addProduct,} = useContext(ShopContext);
  
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const schema = Joi.object({
    productName: Joi.string().min(6).max(15).allow("").required(),
    price: Joi.number().precision(2).required(),
    productImg: Joi.string().min(2).max(15).allow("").required(),
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(form);
    navigate("/admin");
  };

  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });

    const { error } = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    if (error) {
      setErrors({ ...errors, [input.name]: error.details[0].message });
    } else {
      delete errors[input.name];
      setErrors(errors);
    }
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);

    console.log(result);

    return !!result.error;
    // console.log(result);
  };

  return (
    <Grid
      marginTop={3}
      container
      component="form"
      justifyContent="center"
      onSubmit={handleSubmit}
    >
      <Grid item xs={3}>
        <Card>
          <CardHeader title="Add Product"/>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="productName"
                  error={!!errors.productName}
                  helperText={errors.productName}
                  onChange={handleChange}
                  value={form.productName}
                  label="Product Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="price"
                  error={!!errors.price}
                  helperText={errors.price}
                  onChange={handleChange}
                  value={form.price}
                  label="Product Price"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="productImg"
                  error={!!errors.productImg}
                  helperText={errors.productImg}
                  onChange={handleChange}
                  value={form.productImg}
                  label="Product Image"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button disabled={isFormInvalid()} type="submit" fullWidth>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
