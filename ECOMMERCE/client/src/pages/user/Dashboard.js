import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import axios from "../../utils/axios";
const Dashboard = () => {
  const [auth] = useAuth();
  const [balance, setBalance] = useState(0);

  const getBankBalance = async () => {
    const response = await axios.get("/api/v1/auth/get-balance", {
      headers: {
        Authorization: auth?.token,
      },
    });
    // console.log(response.data);
    setBalance(response.data.balance);
  };
  useEffect(() => {
    getBankBalance();
  }, []);
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="top-banner ">
        <div className="xyauto text-center">
          <h3 className="big-txt text-light mt-5">Dashboard</h3>
          <p className="text-secondary">Home / Dashboard</p>
        </div>
      </div>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-5 rounded-0 ">
              {/* <div className="w-25">
              <img src="./images/login/pc.jpg" className="w-100" alt="this is an icon" width={"100"} />
             </div> */}
              <div className="w-75">
                <h4 className="text-info">
                  {" "}
                  Name : <span>{auth?.user?.name}</span>
                </h4>
                <p className="text-secondary mb-1">
                  Email : {auth?.user?.email}
                </p>
                <p className="text-secondary">
                  {" "}
                  Address : {auth?.user?.address}
                </p>
                <p className="text-secondary"> Bank Balance : ${balance}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
