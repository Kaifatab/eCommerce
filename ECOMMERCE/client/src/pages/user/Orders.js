import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders"}>
      <div className="top-banner ">
        <div className="xyauto text-center">
          <h3 className="big-txt text-light mt-5">Orders</h3>
          <p className="text-secondary">Home / Dashboard / Orders</p>
        </div>
      </div>
      <div className="container-flui p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <table className="table border">
                    <thead className="bg-dark text-light">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col"> date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" my-auto">
                        <td className="text-14 mt-2">{i + 1}</td>
                        <td className="text-14 mt-2">{o?.status}</td>
                        <td className="text-14 mt-2">{o?.buyer?.name}</td>
                        <td className="text-14 mt-2">
                          {moment(o?.createAt).fromNow()}
                        </td>
                        <td className="text-14 mt-2">{o?.payment}</td>
                        <td className="text-14 mt-2">{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container pb-5">
                    {o?.products?.map((p, i) => (
                      <div
                        className="row mb-2 p-3 card flex-row rounded-0"
                        key={p._id}
                      >
                        <div className="col-md-3">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top w-100 h-100"
                            alt={p.name}
                            width=""
                            height={"100px"}
                          />
                        </div>
                        <div className="col-md-8 my-auto">
                          <p className="text-14 pb-0">{p.name}</p>
                          <p className="text-14 pb-0">
                            {p.description.substring(0, 30)}
                          </p>
                          <p>Price : {p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
