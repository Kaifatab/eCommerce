/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import "./stylelog.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [accNumber, setAccNumber] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
        account_no: accNumber,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="w-100 d-flex container mt-100 shadow p-0 mx-auto">
        <div className="w-50 ">
          <img
            src="./images/login/pc.jpg"
            className="w-100 h-100"
            alt="this is an image"
          />
        </div>
        <div className="w-50 d-flex px-10p">
          <form onSubmit={handleSubmit} className="w-100 text-center">
            <h4 className="title text-center fw-bold">REGISTER</h4>
            <p className="text-secondary pb-4">
              {" "}
              <small>Register and buy our classy products</small>{" "}
            </p>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control w-100 py-2 text-14 rounded-0 text-secondary"
                id="exampleInputEmail1"
                placeholder="Enter Your Name"
                required
                autoFocus
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control w-100  text-14 rounded-0 text-secondary"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control w-100  text-14 rounded-0 text-secondary"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control w-100  text-14 rounded-0 text-secondary"
                id="exampleInputEmail1"
                placeholder="Enter Your Phone"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control w-100  text-14 rounded-0 text-secondary"
                id="exampleInputEmail1"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control w-100  text-14 rounded-0 text-secondary"
                id="exampleInputEmail1"
                placeholder="Enter a secret key"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control w-100  text-14 rounded-0 text-secondary"
                id="exampleInputEmail1"
                placeholder="Bank Account Number"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark rounded-0 py-2 mt-3 w-50 mx-auto"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
