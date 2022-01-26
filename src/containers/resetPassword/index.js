import React, { useState } from "react";
//import { useDispatch } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Button,
  Container,
  CssBaseline,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import Link from "@mui/material/Link";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Icons & Images

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
import resetPassword from "../../images/reset-password.jpg";
import account from "../../images/account.png";
import { signin } from "../../actions/authActions";
import { Navigate, useNavigate } from "react-router-dom";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

export const ResetPassword = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [values, setValues] = React.useState({
    amount: "",
    password: null,
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [confirmValues, setConfirmValues] = React.useState({
    amount: "",
    confirmPassword: null,
    weight: "",
    weightRange: "",
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const confirmHandleChange = (prop) => (event) => {
    setConfirmValues({ ...confirmValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setConfirmValues({
      ...confirmValues,
      showConfirmPassword: !confirmValues.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const user = {
    email,
    password: values.password,
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(signin(user));
  };

  if (auth.authenticate) {
    return <Navigate to={`/`} />;
  }

  return (
    <>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            height: "100%",
            overflow: "hidden",
            marginTop: "5%",
            boxShadow: `
                   0 -3em 3em rgba(0,0,0,0.1),
                   0 0  0 2px rgb(255,255,255),
                   0.3em 0.3em 1em #002d68`,
            borderRadius: 10,
          }}
        >
          <Grid container spacing={1} ml={1}>
            <Grid item xs={6}>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", justifyContent: "space-around" }} mt={2}>
                  <AccountCircleOutlinedIcon sx={{ fontSize: 90, color:"rgb(102 185 255)" }}/>
                </Box>
                <Typography variant="h4" align="center">
                  Account
                </Typography>
              </Stack>

              <Box
                sx={{ display: "flex", alignItems: "flex-end" }}
                pt={3}
                mt={3}
                ml={5}
                mr={5}
              >
                <HttpsIcon sx={{ color: "#002d68", mr: 1, my: 0.5 }} />
                <Input
                  fullWidth
                  placeholder="Password"
                  color="primary"
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: "#002d68" }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "flex-end" }}
                pt={3}
                mt={3}
                ml={5}
                mr={5}
              >
                <HttpsIcon sx={{ color: "#002d68", mr: 1, my: 0.5 }} />
                <Input
                  fullWidth
                  placeholder="Confirm Password"
                  sx={{ color: "#002d68" }}
                  id="standard-adornment-password"
                  autoComplete="off"
                  type={confirmValues.showConfirmPassword ? "text" : "Password"}
                  value={confirmValues.confirmPassword}
                  onChange={confirmHandleChange("confirmPassword")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: "#002d68" }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {confirmValues.showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>

              <Root>
                <Box pt={2} mr={15} ml={15} mt={1} pb={3}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ bgcolor: "#002d68" }}
                    onClick={login}
                  >
                    Reset Password
                  </Button>
                </Box>
                <Divider>OR</Divider>
                <Box
                  sx={{ display: "flex", justifyContent: "center" }}
                  mb={2}
                  pt={3}
                >
                  <Typography
                    sx={{ fontSize: "16px", color: "#002d68", fontWeight: 600 }}
                  >
                    Login with
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "space-around" }}
                  mb={5}
                >
                  <Button sx={{ color: "#002d68", fontWeight: 600 }}>
                    <GoogleIcon />
                  </Button>
                  <Button sx={{ color: "#002d68", fontWeight: 600 }}>
                    <FacebookIcon />
                  </Button>
                  <Button sx={{ color: "#002d68", fontWeight: 600 }}>
                    <TwitterIcon />
                  </Button>
                </Box>
              </Root>
            </Grid>

            <Grid item xs={6}>
              <Image src={resetPassword} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
