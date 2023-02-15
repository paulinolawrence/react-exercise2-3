import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { ShopContext } from "../../context/shop-context";
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

export const EditProduct = () => {
  const params = useParams();
  const { products, editProduct } = useContext(ShopContext);

  const { ...product } = products.find((product) => product.id === +params.id);

  const [form, setForm] = useState(product);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const schema = Joi.object({
    id: Joi.allow(),
    productName: Joi.string().min(6).max(50).allow("").required(),
    price: Joi.number().precision(2).required(),
    productImg: Joi.string().allow("").required(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    editProduct(form.id, form);
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
          <CardHeader title="Edit Product" />
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
  );
};
