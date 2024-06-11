import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Box,
  Typography,
  CssBaseline,
  TextField,
  Button,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Login, selectAuth } from "./UserSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      dispatch(
        Login({
          email: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        })
      );
    }
  }, [dispatch]);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.email === "admin@123" && values.password === "1234567") {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
      dispatch(Login(values));
      navigate("/home"); // Navigate to home page after login
    } else {
      alert("Invalid email or password");
    }
    setSubmitting(false);
  };

  // const handleSignOut = () => {
  //   localStorage.removeItem('isAuthenticated');
  //   localStorage.removeItem('email');
  //   localStorage.removeItem('password');
  //   dispatch(Logout());
  //   // navigate('/'); // Navigate to login page after logout
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h3" color={"primary"}>
          {/* {isAuthenticated ? "Welcome" : "Sign in"} */}
          Sign in
        </Typography>
        <Box
          sx={{
            mt: 1,
            p: 3,
            border: "1px solid #ccc",
            borderRadius: 1,
            width: "100%",
            //   border: "1px solid #333",
            //   transition: "background-color 0.3s, color 0.3s",
            //   flexdirection: "column",
            //   textalign: "center",
            //   justifycontent: "end",
            //   margin: "auto",
            //   margintop: "60px",
            //   width: "350px",
            //   padding: "50px",
            //   height: "230px",
            //   boxshadow: "0px 2px 8px 4px grey",
            // borderradius: "5px",
          }}
        >
          {/* {isAuthenticated ? (
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          ) : ( */}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  // required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  // required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  helperText={<ErrorMessage name="password" />}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="info"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
          {/* )}  */}
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
