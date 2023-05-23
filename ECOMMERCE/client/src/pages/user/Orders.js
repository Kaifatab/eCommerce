import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "../../components/Layout/Layout";

const Orders = () => {
  return (
    <div>
      <Layout>
        <div className="container-fluid dashboard m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <h1>All orders</h1>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Orders;
