import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const Register = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              type="text"
              placeholder="your name"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@email.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="****"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1, ml: 0 }}>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>

      
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{mr:1}}> You have already account?</Typography>
            <Link
              component={LinkRouter}
              color="inherit"
              to="/auth/login"
            >Login</Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
