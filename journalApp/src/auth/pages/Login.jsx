import React, { useMemo } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/authentication/thunks";

export const Login = () => {

  const { status, error } = useSelector(state => state.authentication);

  const dispatch = useDispatch();

  const { formState, onInputChange } = useForm({
    email: 'tygcloths@gmail.com',
    password: '123456'
  });

  const isAuthenticated = useMemo(() => status === 'checking', [status])

  const { email, password } = formState;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword({email,password}))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
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

          <Grid item xs={12} display={!!error ? '': 'none'}>
            <Alert severity="error">{error}</Alert>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1, ml: 0 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth disabled={isAuthenticated}>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth disabled={isAuthenticated} >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={LinkRouter} color="inherit" to="/auth/register">
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
