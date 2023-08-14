import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
// import axios from "axios";
import axios from "../../utils/axios";
import axios_bank from "../../utils/axios_bank";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  // const [auth,setAuth] = useState(null/)
  console.log(auth);
  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  const getBankBalance = async () => {
    const response = await axios.get("/api/v1/auth/get-balance", {
      headers: {
        Authorization: auth?.token,
      },
    });
    // console.log(response.data);
    setBalance(response.data.balance);
  };

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>
      <div className="top-banner ">
        <div className="xyauto text-center">
          <h3 className="big-txt text-light mt-5">Profile</h3>
          <p className="text-secondary">Home / Dashboard / Profile</p>
        </div>
      </div>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="w-50 mx-auto mt-5 shadow-lg p-5 mb-5">
              <form onSubmit={handleSubmit} className="text-center">
                <h5 className="title fs-4 fw-bold">User Profile</h5>
                <p className="text-secondary my-3 mb-5">
                  You can update your profile info
                </p>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control py-2 text-14 rounded-0 text-secondary"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Name"
                    autoFocus
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control py-2 text-14 rounded-0 text-secondary"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email "
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control  py-2 text-14 rounded-0 text-secondary"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control py-2 text-14 rounded-0 text-secondary"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control py-2 text-14 rounded-0 text-secondary"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Address"
                  />
                </div>
                {/* <div className="mb-3">Bank Balance: ${balance}</div> */}

                <button
                  type="submit"
                  className="btn btn-info rounded-1 px-5 py-2 mb-5 mt-3"
                >
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
