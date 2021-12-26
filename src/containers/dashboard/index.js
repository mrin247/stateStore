import {
  Box,
  Container,
  Grid,
  List,
  makeStyles,
  Paper,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Layout } from "../../components/layout";
import { Datalist } from "../../components/List";
import { SideBar } from "../../components/sidebar/indes";

/**
 * @author
 * @function Dashboard
 **/

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: "10px",
  color: theme.palette.text.secondary,
}));

export const Dashboard = (props) => {
  return (
    <Layout>
      <Container maxWidth="100%">
        <Box sx={{ height: "80vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Item sx={{ bgcolor: "green", color: "whitesmoke" }}>
                <h1>Total Orders</h1>
                <Typography>278544</Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item sx={{ bgcolor: "red", color: "whitesmoke" }}>
                <h1>Pending Orders</h1>
                <Typography>278544</Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item sx={{ bgcolor: "orange", color: "whitesmoke" }}>
                <h1>Total Income</h1>
                <Typography>278544</Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item sx={{ bgcolor: "purple", color: "whitesmoke" }}>
                <h1>Total Customers</h1>
                <Typography>278544</Typography>
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={2} pt={2}>
            <Grid item xs={6}>
              <Datalist />
            </Grid>
            <Grid item xs={6}>
              <Datalist />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};
