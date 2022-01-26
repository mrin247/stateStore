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
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import Link from "@mui/material/Link";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Icons & Images

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
import forgotPasswordImage from "../../images/forgot-password.jpg";
import { forgotPassword, signin } from "../../actions/authActions";
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

export const ForgotPassword = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const account = {
    email
  };

  const resetPassword = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(account));
    setEmail("");
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
              <Box sx={{ display: "flex", alignItems: "flex-end" }} margin={5}>
                <Typography
                  sx={{ fontSize: "16px", color: "#002d68", fontWeight: 600 }}
                  variant="subtitle1"
                >
                  Type your full Email address to get Reset password link ...
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-end" }}
                pt={2}
                margin={5}
              >
                <MailIcon sx={{ color: "#002d68", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  color="primary"
                  id="input-with-sx"
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>

              <Root>
                <Box pt={2} mr={15} ml={15} mt={1} pb={3}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ bgcolor: "#002d68" }}
                    onClick={resetPassword}
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
                  mb={15}
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
              <Box ml={3}>
                <span>Don't have an account ? </span>
                <Link
                  onClick={() => navigate("/signup")}
                  underline="hover"
                  sx={{ color: "#002d68", fontWeight: 600 }}
                >
                  Create an account here
                </Link>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Image src={forgotPasswordImage} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
