import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setCHangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (

    <Layout title={"All Orders Data"}>
       <div className="top-banner ">
          <div className="xyauto text-center">
            <h3 className="big-txt text-light mt-5">Admin Orders</h3>
            <p className="text-secondary">Home / Orders</p>
          </div>
        </div>
      <div className="row dashboard px-5">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
     
          {orders?.map((o, i) => {
            return (
              <div className="shadow-lg  px-5 pt-5 mb-5">
                     <h5 className="mb-3">Order's info Table </h5>
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
                      <td className="m-auto">{i + 1}</td>
                      <td>
                        <Select
                          bordered={false}
                          onChange={(value) => handleChange(o._id, value)}
                          defaultValue={o?.status}
                        >
                          {status.map((s, i) => (
                            <Option key={i} value={s}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                      </td>
                      <td className="text-14 mt-2">{o?.buyer?.name}</td>
                      <td className="text-14 mt-2">{moment(o?.createAt).fromNow()}</td>
                      <td className="text-14 mt-2">{o?.payment.success ? "Success" : "Failed"}</td>
                      <td className="text-14 mt-2 mx-auto">{o?.products?.length}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="container pb-5">
                  {o?.products?.map((p, i) => (
                    <div className="row mb-2 p-3 card flex-row rounded-0" key={p._id}>
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
                        <p  className="text-14 pb-0">{p.name}</p>
                        <p className="text-14 py-0">{p.description.substring(0, 30)}</p>
                        <p >Price : {p.price}</p>
   
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

export default AdminOrders;
