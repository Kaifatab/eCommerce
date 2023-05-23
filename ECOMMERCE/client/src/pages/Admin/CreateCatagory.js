import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";

const CreateCatagory = () => {
  return (
    <div>
      <Layout>
        <div className="container-fluid dashboard m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <h1>CreateCatagory</h1>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CreateCatagory;
