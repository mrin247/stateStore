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
import { useDispatch } from "react-redux";
import { getOrders, updateOrder } from "../../actions/orderActions";

/**
 * @author
 * @function OrderStatusDialoge
 **/

export const OrderStatusDialoge = (props) => {
  const val = props.value;
  const v = props.status;
  const type = v.type;
  const order = props.order;
  console.log(order);

  const [status, setStatus] = React.useState(type);
  const [lastIndex, setLastIndex] = React.useState(props.statusIndex);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const ind =
      event.target.value === "delivered"
        ? 3
        : event.target.value === "shipped"
        ? 2
        : event.target.value === "packed"
        ? 1
        : 0;
    setStatus(event.target.value);
    setLastIndex(ind);
  };

  const updateOrderStatus = () => {
    val.map((v, index) => {
      v.isCompleted =
        v.type === status || index <= lastIndex ? true : v.isCompleted;
      v.date = v.type === status || index <= lastIndex ? Date.now() : v.date;
    });

    const updatedOrder = {
      productId: order.productId._id,
      sellerId: order.sellerId,
      payablePrice: order.payablePrice,
      purchasedQty: order.purchasedQty,
      orderId: order._id,
      orderStatus: val,
    };

    console.log(updatedOrder);
    dispatch(updateOrder(updatedOrder));
    props.handleClose().then(setTimeout(dispatch(getOrders())), 3000);
  };

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
                <Typography>
                  {" "}
                  Created At : {Date(order.orderStatus[0].date).split("GMT")[0]}
                </Typography>
                <Typography textTransform={"capitalize"}>
                  {type} On: {Date(v.date).split("GMT")[0]}
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
                      <MenuItem
                        value={v.type}
                        disabled={v.isCompleted ? true : false}
                      >
                        {v.type}
                      </MenuItem>
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
            onClick={updateOrderStatus}
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
