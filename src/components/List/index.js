import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyle = makeStyles({
  heading: {
    fontWeight: 600,
    color: "whitesmoke",
  },
});
export const Datalist = (props) => {
  const styles = useStyle();
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "10px",
          bgcolor: "rgb(0 30 60)",
          color: "whitesmoke",
        }}
      >
        <Box ml={2} mt={2} sx={{ display: "flex", justifyContent: "start" }}>
          <Typography sx={{ color: "orange", fontWeight: 900, fontSize: 20 }}>
            Top Customers
          </Typography>
        </Box>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={styles.heading}>
                Dessert (100g serving)
              </TableCell>
              <TableCell className={styles.heading} align="right">
                Calories
              </TableCell>
              <TableCell className={styles.heading} align="right">
                Fat&nbsp;(g)
              </TableCell>
              <TableCell className={styles.heading} align="right">
                Carbs&nbsp;(g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ color: "whitesmoke" }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell sx={{ color: "whitesmoke" }} align="right">
                  {row.calories}
                </TableCell>
                <TableCell sx={{ color: "whitesmoke" }} align="right">
                  {row.fat}
                </TableCell>
                <TableCell sx={{ color: "whitesmoke" }} align="right">
                  {row.carbs}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Button sx={{ color: "blue", fontWeight: 400, fontSize: 12 }}>
            View All
          </Button>
        </Box>
      </TableContainer>
    </>
  );
};
