import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import './style.css'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from '@mui/icons-material/LocalMall';

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useParams, useNavigate } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
     
      <div className="conntaienr  w-100 container dashboard  mx-auto">
      <div className="text-center mx-auto text-secondary mb-3"><h2 className="text-center">PRODUCT DETAILS</h2>
      </div>
       <div className="d-flex mt-5">
       <div className="col-md-6 w-50 p-4 border">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="w-100 h-100"
            alt={product.name}
            
          />
        </div>
        <div className="col-md-6 w-50 p-4 ps-5 my-5">
          
          <p className="fs-3 mb-0 pb-0  ">{product.name}</p>
          <p className="text-secondary pb-3 text-14">Origin: Made by japan</p>
          <p className="fs-3 text-danger mt-3">Price : ${product.price}</p>
          <p className="text-secondary mt-3">Description : {product.description}</p>
         
          <p className="text-secondary mb-3 pt-0">Category : {product?.category?.name}</p>
          <p className="mt-3 my-auto d-flex">
              
              <p className="text-secondary my-auto">
                Delivery Time:
                <span className="text-dark fw-bold ps-2">
                  3-7 business days
                </span>
              </p>
            </p>
            <p className="pt-3">
              <p className="text-secondary">
                {" "}
               Terms and conditions applied
              </p>
            </p>
         <div className="d-flex gap-3 mt-5">
         <button class="btn btn-dark rounded-1 w-50 ms-1 py-2">ADD TO CART</button>
         <button class="btn btn-outline-info rounded-1 w-50 ms-1 py-2">Add to wish list</button>
         </div>
        </div>
       </div>
      </div>
      <hr />
      <div className="row container mx-auto mt-5">
        <h5 className=" ms-2 fw-bold border-bottom pb-3">Similar Products</h5>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap mb-5">
          {relatedProducts?.map((p) => (
            <div className="w-25 m-4" style={{ width: "18rem" }}>
              <img
                src={`/api/v1/product/product-photo/${p?._id}`}
                className=" border w-100"
                alt={p.name}
              />
              <div className="card-body p-3">
                <h5 className="card-title ">{p.name}</h5>
                <p className="card-text mt-2 text-secondary ">{p.description.substring(0, 25)}...</p>
                <div className="d-flex justify-content-between mt-2">
                   <button className="btn px-0 mt-1">
                     <FavoriteBorderIcon className="fs-3 fw-normal text-danger" />
                   </button>
                   <p className="text-20 fw-bold text-dark my-auto pt-1">$ {p.price}</p>
                   <button
                    
                   className="btn ps-2 my-auto text-warning">
                     
                     <LocalMallIcon
                     />
                   </button>
                 </div>
               <div className="d-flex w-100 text-light gap-2">
               <button
                  className="btn btn-dark w-50  text-white"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  More Details
                </button>
                <button class="btn btn-secondary w-50 text-white">ADD TO CART</button>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
