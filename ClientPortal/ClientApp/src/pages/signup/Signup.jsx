import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Banner from "../../components/Signup/Banner";
import delay from '../../utils/delay';
import { useForm } from 'react-hook-form';
import validationRules, { isEmailAddress, matchPassword } from '../../utils/validator';

export default function SignUp() {

  const navigate = useNavigate();
  const form = useForm();
  const { register, handleSubmit, getValues, watch, formState: { errors, isValid } } = form;

  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (data) => {
    console.log("errors", errors);
    console.log("submitting...");
    console.log("form values: ", getValues())
    if (isValid) {
      console.log("validation errors: ", errors);
      console.log("form data: ", data);
      console.log("Get Values: ", getValues())
      await redirect(data.firstName);
    }
  };

  async function redirect(firstName) {
    setIsLoading(true);
    await delay(2000);
    setIsLoading(false);
    navigate("/welcome", { state: { name: firstName } });
  }

  return (

    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit(handleOnSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                error={errors.firstName ? true : false}
                helperText={errors?.firstName?.message}
                required
                fullWidth
                id="firstName"
                label="First Name"
                {...register("firstName", validationRules().required)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="family-name"
                name="lastName"
                error={errors.lastName ? true : false}
                helperText={errors?.lastName?.message}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                {...register("lastName", validationRules().required)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                error={errors.email ? true : false}
                helperText={errors?.email?.message}
                autoComplete="email"
                {...register("email", isEmailAddress(getValues("email")))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                error={errors.password ? true : false}
                helperText={errors?.password?.message}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register("password", validationRules().password)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="confirmPassword"
                error={errors.confirmPassword ? true : false}
                helperText={errors?.confirmPassword?.message}
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                //  {...register("confirmPassword", {required: "required", validate: (value) => value === getValues("password") || "Passwords must match"})}
                {...register("confirmPassword", matchPassword(watch("password")))}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          <Banner style={{ textJustify: "inner-work" }} />
        </Box>
      </Box>
    </Container>
  );
}