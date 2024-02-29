import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

export const Register = () => {

  const formData = {
    name: "",
    email: "",
    password: "",
  };

  const validations = {

    email: [(value) => value.includes("@"), "The email must contains @"],

    password: [ (value) => value.length >= 6, "The password must containt minimum 6 charactes"],

    name: [(value) => value.length >= 1, "The name must containt 2 characters"],
  };

  const { formState, formValidations, onInputChange  } = useForm(
    formData,
    validations,
  );

  const { name, email, password } = formState;

  const { nameValid, emailValid, passwordValid } = formValidations;

  console.log(nameValid)

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              type="text"
              placeholder="your name"
              fullWidth
              name="name"
              value={name}
              onChange={onInputChange}
              error={!nameValid}
              helperText={nameValid}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@email.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="****"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1, ml: 0 }}>
            <Grid item xs={12} sm={12}>
              <Button type="submit" variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}> You have already account?</Typography>
            <Link component={LinkRouter} color="inherit" to="/auth/login">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
