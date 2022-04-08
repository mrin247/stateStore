import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

/**
 * @author
 * @function OrderStatusDialoge
 **/

export const OrderStatusDialoge = (props) => {
  const val = props.value;
  const v = props.status;
  const type = v.type;
  const order = props.order;

  const [status, setStatus] = React.useState(type);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  console.log(order);
  return (
    <Dialog disableEscapeKeyDown open={props.open} onClose={props.handleClose}>
      <DialogTitle>Change Order Status</DialogTitle>
      <DialogContent>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography> Order Id: {order._id}</Typography>

            <Typography> Seller Id: {order.sellerId}</Typography>
          </Box>
          <Box sx={{ display: "flex" }} mt={5} mb={3}>
            <Box>
              <Typography> Product Id: {order.productId._id}</Typography>
              <Typography> Product Name: {order.productId.name}</Typography>
              <Typography> Purchased Quantity: {order.purchasedQty}</Typography>
              <Typography> Price : {order.payablePrice}</Typography>

              <Box mt={3}>
                <Typography> Created At : {order.createdAt}</Typography>
                <Typography textTransform={"capitalize"}>
                  {type} On: {v.date}
                </Typography>
              </Box>
            </Box>

            <Box component="form" sx={{ display: "flex", marginLeft: "auto" }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  onChange={handleChange}
                  sx={{
                    color: "whitesmoke",
                    border: "1px solid white",

                    backgroundColor:
                      status === "delivered"
                        ? "green"
                        : status === "shipped"
                        ? "orange"
                        : status === "packed"
                        ? "violet"
                        : "blue",
                    "&:hover": {
                      border: "1px solid white",
                    },
                    "&:active": {
                      border: "1px solid white",
                    },
                    "&:focus": {
                      border: "1px solid white",
                    },
                  }}
                >
                  {
                    //console.log(val)
                    val.map((v, index) => (
                      <MenuItem value={v.type}>{v.type}</MenuItem>
                    ))
                  }
                  {/* <MenuItem value={1}>Ordered</MenuItem>
                                    <MenuItem value={2}>Packed</MenuItem>
                                    <MenuItem value={3}>Shipped</MenuItem>
                                    <MenuItem value={4}>Delivered</MenuItem> */}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <Box mt={3} pb={1}>
        <DialogActions>
          <Button onClick={props.handleClose} variant="contained" color="error">
            Discard
          </Button>
          <Button
            onClick={props.handleClose}
            variant="contained"
            color="success"
          >
            Update
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
