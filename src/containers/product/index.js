import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { productDetail } from "../../actions/productActions";
import { EditProduct } from "../../components/EditProduct";
import { Layout } from "../../components/layout";

/**
 * @author
 * @function Product
 **/

export const Product = (props) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { productId } = useParams();
//   const product = useSelector((state) => state.product.productDetail);
//   React.useEffect(() => {
//     dispatch(productDetail(productId));
//   }, []);
  return (
    <Layout>
      <EditProduct  />
    </Layout>
  );
};
