import React from "react";
import { Alllist } from "../../components/Alllist";
import { Layout } from "../../components/layout";

/**
 * @author
 * @function Customer
 **/

export const Customers = (props) => {
  return (
    <Layout>
      <Alllist title="All Customers" />
    </Layout>
  );
};
