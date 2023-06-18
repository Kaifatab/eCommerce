import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import './style.css'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from '@mui/icons-material/LocalMall';

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"ALl Products - Best offers "}>
       <div className="top-banner ">
          <div className="xyauto text-center">
            <h3 className="big-txt text-light mt-5">Products</h3>
            <p className="text-secondary">Home / Products</p>
          </div>
        </div>
      <div className="container-fluid row mt-2 px-5 d-flex">
        <div className="col-md-2 mt-5p mb-5 p-4 rounded-0 bg-light border ">
          <h4 className="text-start fs-5 fw-bold pt-3">Filter By Category</h4>
          <div className="d-flex flex-column gap-1 pt-3">
            {categories?.map((c) => (
              <Checkbox
               className="text-secondary my-auto pb-2"
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
               <p className="cate-hover my-auto"> {c.name}</p>
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h5 className="text-start mt-5">Filter By Price</h5>
          <div className="d-flex flex-column flex-wrap">
            <Radio.Group className="gap-3 pt-1" onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id} className="py-2 d-flex">
                  <Radio className="text-secondary my-auto" value={p.array}> <p className="cate-hover my-auto">{p.name}</p></Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column mt-4">
            <button
              className="btn btn-dark rounded-1 w-100"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9 offset-1">
          <h6 className="text-start py-4 fw-bold">All Products</h6>
          <div className="d-flex flex-wrap row gap-2">
            {products?.map((p) => (
              // <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
              //   <img
              //     src={`/api/v1/product/product-photo/${p._id}`}
              //     className="card-img-top"
              //     alt={p.name}
              //   />
              //   <div className="card-body">
              //     <h5 className="card-title">{p.name}</h5>
              //     <p className="card-text">
              //       {p.description.substring(0, 30)}...
              //     </p>
              //     <p className="card-text"> $ {p.price}</p>
              //     <button
              //       className="btn btn-primary ms-1"
              //       onClick={() => navigate(`/product/${p.slug}`)}
              //     >
              //       More Details
              //     </button>
              //     <button
              //       className="btn btn-secondary ms-1"
              //       onClick={() => {
              //         setCart([...cart, p]);
              //         localStorage.setItem(
              //           "cart",
              //           JSON.stringify([...cart, p])
              //         );
              //         toast.success("Item Added to cart");
              //       }}
              //     >
              //       ADD TO CART
              //     </button>
              //   </div>
              // </div>
               <div key={p._id} className="card-main w-25 rounded-0 ">
               <div className=" position-relative d-flex">
                 <img
                   className="w-100 h-100 position-relative border border-1"
                   src={`/api/v1/product/product-photo/${p._id}`}
                   alt={p.name}
                 />
                 {/* <span    className="start-0 top-0 position-absolute p-3">
                 <img
                
                   src={best}
                   width={"50"}
                   alt="This  is an  picture"
                 />
                 </span> */}
                 {/* <button
                   onClick={
                     () => {}
                     // setShowModal((pre) => {
                     //   return !pre;
                     // })
                   }
                   // data-bs-target="#modalID"
                   // data-bs-toggle="modal"
                   className="position-absolute top-50 left-20 d-flex btn btn-details px-3 py-1 f-14 text-light "
                 >
                   <ShoppingCartIcon className="pe-1 my-auto" />{" "}
                   <p className="m-auto"> Details</p>
                 </button> */}
               </div>
               <div className="text-start p-3">
                 <p className=" fw-bold text-16 text-dark">
                 {p.name}
                 </p>
                 <p className="m-0 py-0 text-12 text-dark">
                 {p.description.substring(0, 35)}...
                 </p>
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
                 <div className="d-flex justify-content-between w-100">
                  <button 
                   onClick={() => navigate(`/product/${p.slug}`)}
                   className="btn btn-dark w-50 py-1 rounded-1">Details</button>
                  <button
                   onClick={() => {
                            setCart([...cart, p]);
                           localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, p])
                            );
                            toast.success("Item Added to cart");
                          }}
                  className="btn btn-outline-dark w-50 rounded-1">Add Cart</button>
                 </div>
               </div>
             </div>
              
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
