import React, { useMemo, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/authentication/thunks";

export const Register = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, error} = useSelector(state =>state.authentication);

  const isChekingAuthentication = useMemo(()=>status === 'checking',[status])

  const dispatch = useDispatch();

  const formData = {
    name: "",
    email: "",
    password: "",
  };

  const validations = {

    email: [(value) => value.includes("@"), "The email must contains @"],

    password: [(value) => value.length >= 6, "The password must containt minimum 6 charactes"],

    name: [(value) => value.length >= 1, "The name must containt 2 characters"],
  };

  const { formState, formValidations, isFormValid, onInputChange } = useForm(
    formData,
    validations,
  );

  const { name, email, password } = formState;

  const { nameValid, emailValid, passwordValid } = formValidations;

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true)

    if (!isFormValid) return;
      
    dispatch(startCreatingUserWithEmailPassword(formState));
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
              error={nameValid && formSubmitted}
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
              error={emailValid && formSubmitted}
              helperText={emailValid}
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
              error={passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1, ml: 0 }}>

          <Grid item xs={12} display={!!error ? '': 'none'}>
            <Alert severity="error">{error}</Alert>
          </Grid>

            <Grid item xs={12} sm={12}>
              <Button type="submit" variant="contained" fullWidth disabled={isChekingAuthentication}>
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
