import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Layout } from "../../components/layout";
import {
  Box,
  Button,
  Container,
  Grid,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { orange, purple } from "@mui/material/colors";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductModal } from "../ProductModal";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../actions/productActions";
import { EditProductModal } from "../EditProduct";
import { OrderStatusDialoge } from "../OrderStatusDialoge";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: "whitesmoke",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "whitesmoke",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    //color: theme.palette.common.black,
    color: orange[700],
  },
  [`& .${tooltipClasses.tooltip}`]: {
    //backgroundColor: theme.palette.common.black,
    backgroundColor: orange[700],
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: orange[700],
  "&:hover": {
    backgroundColor: orange[500],
  },
}));

export const OrderList = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const location = useLocation();
  const navigate = useNavigate();

  const rows = props.rows;
  const columns = props.columns;

  //const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Container
      maxWidth="100%"
      sx={{ overflow: "hidden", borderRadius: "10px" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Box sx={{ display: "flex", justifyContent: "start" }}>
            <Typography variant="h5" pb={2}>
              {props.title}
            </Typography>
          </Box>
        </Grid>
        {location.pathname === "/products" ? (
          <Grid item xs={3}>
            <ColorButton
              variant="contained"
              fullWidth
              startIcon={<AddIcon />}
              //onClick={handleOpen}
              onClose={handleClose}
            >
              Create Product
            </ColorButton>
            <ProductModal open={open} onClose={() => handleClose()} />
          </Grid>
        ) : null}
      </Grid>
      <TableContainer
        sx={{
          bgcolor: "rgb(0 30 60)",
          maxHeight: "70vh",
          borderRadius: "10px",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ bgcolor: "red" }}>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <>
                    <StyledTableRow
                      hover
                      button
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      sx={{ cursor: "pointer" }}
                    >
                      {columns.map((column) => {
                        const val = row[column.id];

                        return (
                          <StyledTableCell
                            hover
                            button
                            key={column.id}
                            align={column.align}
                          >
                            {column.id === "orderStatus" &&
                            column.label === "Order Status" ? (
                              <>
                                {val.map((v, index) =>
                                  v.isCompleted &&
                                  (index + 1 < 4
                                    ? val[index + 1].isCompleted === false
                                    : false || v.type === "delivered") ? (
                                    <>
                                      <Button
                                        onClick={handleClickOpen}
                                        variant="contained"
                                        sx={{
                                          color: "whitesmoke",
                                          backgroundColor:
                                            v.type === "delivered"
                                              ? "green"
                                              : v.type === "shipped"
                                              ? "orange"
                                              : v.type === "packed"
                                              ? "violet"
                                              : "blue",
                                          "&:hover": {
                                            backgroundColor:
                                              v.type === "delivered"
                                                ? "green"
                                                : v.type === "shipped"
                                                ? "orange"
                                                : v.type === "packed"
                                                ? "violet"
                                                : "blue",
                                          },
                                        }}
                                      >
                                        {v.type}
                                      </Button>
                                      <OrderStatusDialoge
                                        open={open}
                                        handleClose={handleClose}
                                        value={val}
                                        status={v}
                                        statusIndex={index}
                                        order={row}
                                      />
                                    </>
                                  ) : null
                                )}
                              </>
                            ) : column.id === "orderStatus" &&
                              column.label === "Ordered At" ? (
                              column.format(val[0].date)
                            ) : // <Typography>
                            //   {val[0].date}
                            // </Typography>
                            column.format ? (
                              column.format(val)
                            ) : (
                              val
                            )}
                          </StyledTableCell>
                        );
                      })}
                    </StyledTableRow>
                  </>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ color: "whitesmoke" }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};
