import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../actions/productActions";
import { Alllist } from "../../components/Alllist";
import { Layout } from "../../components/layout";

/**
 * @author
 * @function Products
 **/

export const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  React.useEffect(() => {
    dispatch(allProduct());
  }, []);

  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "price", label: "Price", minWidth: 100 },
    {
      id: "category",
      label: "Category",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "quantity",
      label: "Quantity",
      minWidth: 170,
      align: "right",
      //format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "inStock",
      label: "Available",
      minWidth: 170,
      align: "right",
      format: (value) => {
        if(value) return "In Stock";
        else return "Out of Stock"
      },
    },
  ];
  return (
    <Layout>
      <Alllist title="All Products" rows={products} columns={columns} />
    </Layout>
  );
};
