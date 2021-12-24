import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Button,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  Input,
  InputAdornment,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Icons & Images
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
import signupImage from "../../images/signup.jpg";

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

export const Signup = (props) => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
                   0.3em 0.3em 1em rgb(156 39 176)`,
            borderRadius: 10,
          }}
        >
          <Grid container spacing={1} ml={1}>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }} pt={2}>
                    <PersonIcon
                      sx={{ color: "rgb(156 39 176)", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx"
                      label="First Name"
                      variant="standard"
                      color="secondary"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }} pt={2}>
                    <PersonIcon
                      sx={{ color: "rgb(156 39 176)", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      fullWidth
                      id="input-with-sx"
                      label="Last Name"
                      color="secondary"
                      variant="standard"
                    />
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ display: "flex", alignItems: "flex-end" }} pt={2}>
                <PhoneIcon sx={{ color: "rgb(156 39 176)", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Mobile Number"
                  variant="standard"
                  color="secondary"
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }} pt={2}>
                <HomeIcon sx={{ color: "rgb(156 39 176)", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Address"
                  variant="standard"
                  color="secondary"
                />
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }} pt={2}>
                    <LocationOnIcon
                      sx={{ color: "rgb(156 39 176)", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx"
                      label="State"
                      color="secondary"
                      variant="standard"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }} pt={2}>
                    <PersonPinCircleIcon
                      sx={{ color: "rgb(156 39 176)", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      fullWidth
                      id="input-with-sx"
                      label="Pin"
                      color="secondary"
                      variant="standard"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", alignItems: "flex-end" }} pt={2}>
                <MailIcon sx={{ color: "rgb(156 39 176)", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Email"
                  variant="standard"
                  color="secondary"
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }} pt={3}>
                <HttpsIcon sx={{ color: "rgb(156 39 176)", mr: 1, my: 0.5 }} />
                <Input
                  fullWidth
                  placeholder="Password"
                  color="secondary"
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        color="secondary"
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

              <Box sx={{ display: "flex", alignItems: "flex-end" }} pt={3}>
                <HttpsIcon sx={{ color: "rgb(156 39 176)", mr: 1, my: 0.5 }} />
                <Input
                  fullWidth
                  placeholder="Confirm Password"
                  color="secondary"
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        color="secondary"
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

              <Root>
                <Box pt={2} mr={10} ml={10} mt={1}>
                  <Button fullWidth variant="contained" color="secondary">
                    Create Account
                  </Button>
                </Box>
                <Divider>OR</Divider>
                <Box sx={{ display: "flex", justifyContent: "center" }} mb={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="http://localhost:4000/signin"
                  >
                    Login
                  </Button>
                </Box>
              </Root>
            </Grid>

            <Grid item xs={6}>
              <Image src={signupImage} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
