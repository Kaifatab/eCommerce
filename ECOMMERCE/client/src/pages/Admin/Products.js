import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import ".././style.css";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
       <div className="top-banner ">
          <div className="xyauto text-center">
            <h3 className="big-txt text-light mt-5">Products</h3>
            <p className="text-secondary">Home / Products</p>
          </div>
        </div>
      <div className="container-fluid  m-3 px-5">
        <div className="row">
          <div className="col-md-3 pt-5">
            <AdminMenu />
          </div>
          <div className="col-md-9 ">
            <h5 className="ms-2 pb-2">All Products List</h5>
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link"
                >
                  <div className="card m-2 rounded-0 " style={{ width: "18rem" }}>
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}

                      className="card-img-top border-bottom"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{p.name}</h6>
                      <p className=" text-14">{p.description.substring(0, 60)}...</p>

                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
