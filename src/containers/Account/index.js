import React from "react";
import { Layout } from "../../components/layout";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

/**
 * @author
 * @function AccountSettings
 **/

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "whitesmoke",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "whitesmoke",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "whitesmoke",
    },
    "&:hover fieldset": {
      borderColor: "whitesmoke",
    },
    "&.Mui-focused fieldset": {
      borderColor: "whitesmoke",
    },
  },
});

export const AccountSettings = (props) => {
  return (
    <Layout>
      <Box>
        <Container Container maxWidth="md">
          <Box>
            <Box ml={10} mr={15} pt={5} mb={4}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    focused
                    label="First Name"
                    id="fullWidth"
                    color="secondary"
                    //value={firstName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CssTextField
                    fullWidth
                    focused
                    label="Last Name"
                    id="fullWidth"
                    //value={lastName}
                  />
                </Grid>
                <Grid item xs={8}>
                  <CssTextField
                    fullWidth
                    focused
                    label="Email"
                    id="fullWidth"
                    //value={email}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <CssTextField
                    fullWidth
                    focused
                    label="Contact Number"
                    id="fullWidth"
                    //value={contactNumber}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};
