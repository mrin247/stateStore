import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../actions/orderActions";

import { Alllist } from "../../components/Alllist";
import { Layout } from "../../components/layout";
import { OrderList } from "../../components/OrderList";

/**
 * @author
 * @function Orders
 **/

export const Orders = (props) => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orders.orders);

  //const orders= orderList? orderList.orders:null;


  React.useEffect(() => {
    dispatch(getOrders());
  }, []);

  const columns = [
    {
      id: "productId",
      label: "Name",
      minWidth: 170,
      format: (value) => value.name,
    },
    { id: "payablePrice", label: "Price", minWidth: 100 },
    {
      id: "createdAt",
      label: "Ordered At",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "purchasedQty",
      label: "Quantity",
      minWidth: 170,
      align: "right",
      //format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "orderStatus",
      label: "Order Status",
      minWidth: 170,
      align: "right",
      format: (value) => {
        if (value) return "In Stock";
        else return "Out of Stock";
      },
    },
  ];
  return (
    <Layout>
      <OrderList columns={columns} rows={orderList} />
    </Layout>
  );
};
