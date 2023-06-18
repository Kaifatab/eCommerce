/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./Navigation.css";
import { Badge } from "antd";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "./image/profile.svg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";

export default function Navigation() {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      {/* offer div */}
      {/* <div className="bg-top d-flex">
        <p className="m-auto text-light text-14 animate__animated  animate__fadeInUp animate__slower	animate__infinite">
          FREE INTERNATIONAL SHIPPING ON ORDER OVER $250!
        </p>
      </div> */}
      {/* 2nd section email and icons  */}
      <div className="bg-dark d-flex justify-content-between border-bottom px115">
        <div className="my-auto text-light d-flex py-2">
          <MailOutlineIcon className="text-light me-1 my-auto" />
          <p className="text-14 navtxt my-auto text-theme-gray ">
            support.infinity@gmail.com
          </p>
        </div>
        <div className=" text-light d-flex gap-2">
          <a
            className="mx-1 text-light my-auto"
            href="https://www.facebook.com/profile.php?id=100087712010768"
          >
            <FacebookIcon />
          </a>
          <a
            className="mx-1 text-light my-auto"
            href="https://wa.me/message/PIZLMGBXCLUUN1"
          >
            <WhatsAppIcon />
          </a>
          <a
            className="mx-1 text-light my-auto"
            href="https://www.instagram.com/invites/contact/?i=5jfrooti9ghz&utm_content=qa5m1k1"
          >
            <InstagramIcon />
          </a>

          <a
            className="mx-1 text-light my-auto"
            href="https://twitter.com/Iconivehairwigs?t=NKMVGHrLlnyuKu5bZkZ3MA&s=35"
          >
            <TwitterIcon />
          </a>
          <a
            className="mx-1 text-light my-auto"
            href="https://www.facebook.com/profile.php?id=100087712010768"
          >
            <YouTubeIcon />
          </a>
          <a
            className="mx-1 text-light my-auto"
            href="https://www.facebook.com/profile.php?id=100087712010768"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {/* title div */}
      <div className="sticky-top">
        <div className="d-flex justify-content-between px115 bg-white py-4">
          <div className="text-start">
            <a
              href="/"
              className="text-decoration-none text-start text-black my-auto"
            >
              <h2 className="fw-bold ps-1 my-auto text44">INFINITY</h2>
            </a>
          </div>
          <div className="my-auto w-50 ">
            {/* <form class="d-flex">
            <input
              class="form-control rounded-end-0 w-100 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-secondary rounded-start-0" type="submit">
              Search
            </button>
          </form> */}
            <SearchInput />
          </div>

          <div className="d-flex  my-auto gap-3">
            {/* <div className="m-auto  ">
            <img src={search} alt="this is an icon" />
          </div> */}
            <div className="m-auto ">
              <FavoriteBorderOutlinedIcon className="fs-2 scale13 text-dark pt-1 " />
            </div>
            <div className="m-auto">
              <Badge className="mt-1" count={cart?.length} showZero>
                <Link to="/cart" className="nav-link text-18 my-auto">
                  <LocalMallOutlinedIcon className="fs-1 text-dark " />
                </Link>
              </Badge>
            </div>
            {/* <div className="m-auto">
              <a href="/profile">
                <img
                  src={profile}
                  className="shadow-lg rounded-circle"
                  alt="this is an icon"
                />
              </a>
            </div> */}
          </div>
        </div>
        <div className="d-flex mx-auto  bg-light shadow">
          {/* <Navbar expand="lg  " className="m-auto py-0  borderBottom">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto gap-5 d-flex mx-auto ">
              <Nav.Link href="/" className="  drop  ">
                HOME
              </Nav.Link>

              <Nav.Link
                //   onClick={() => {
                //     setCollectionDropdown((prevs) => {
                //       return !prevs;
                //     });
                //   }}
                className="text-black drop  text-nav"
              >
                SHOP
              </Nav.Link>
              {/* {CollectionDropdown && (
                  <div className=" w-1200 container d-flex position-absolute z-100 mt-100 bg-white p-0 shadow-lg navOpen">
                    <a
                      href="/catagory"
                      className="text-decoration-none w-25 drop p-4 border-end"
                    >
                      <div className="w-100 ">
                        <div className="">
                          <img
                            src={malepro}
                            alt="This is an Image"
                            className="w-100"
                          />
                        </div>
                        <a
                          href="/catagory"
                          className="text-decoration-none text-dark"
                        >
                          <p className="mt-3 text-18 nav-drop">Gents Wigs</p>
                        </a>
                      </div>
                    </a>
                    <a
                      href="/catagory"
                      className="text-decoration-none w-25 drop p-4 border-end"
                    >
                      <div className="w-100  ">
                        <div className="w-100 ">
                          <img
                            src={femalepro}
                            alt="This is an Image"
                            className="w-100"
                          />
                        </div>
                        <a
                          href="/catagory"
                          className="text-decoration-none text-dark "
                        >
                          <p className="mt-3 text-18 nav-drop">Ladis Wigs</p>
                        </a>
                      </div>
                    </a>
                    <a
                      href="/catagory"
                      className="text-decoration-none w-25 drop p-4 border-end"
                    >
                      <div className="w-100 ">
                        <div className="w-100 ">
                          <img
                            src={rawpro}
                            alt="This is an Image"
                            className="w-100"
                          />
                        </div>
                        <a
                          href="/catagory"
                          className="text-decoration-none text-dark "
                        >
                          <p className="mt-3 nav-drop text-18">Raw Hair</p>
                        </a>
                      </div>
                    </a>
                    <a
                      href="/catagory"
                      className="text-decoration-none w-25 drop p-4"
                    >
                      <div className="w-100">
                        <div className="w-100 ">
                          <img
                            src={accpro}
                            alt="This is an Image"
                            className="w-100"
                          />
                        </div>
                        <a
                          href="/catagory"
                          className="text-decoration-none text-dark "
                        >
                          <p className="mt-3 text-18 nav-drop">Accessories</p>
                        </a>
                      </div>
                    </a>
                  </div>
                )} */}

          {/* <Nav.Link href="#home" className="text-black drop text-nav">
               MAN
              </Nav.Link>

              <Nav.Link
                href="#home"
                className="text-black text-nav text-uppercase drop"
              >
               WOMAN
              </Nav.Link>

           
              <Nav.Link
                href="#home"
                className="text-black text-nav text-uppercase drop"
              >
                JOIN US
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
          <nav className="m-auto py-0 navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link ">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/shop" className="nav-link ">
                      Shop
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={"/categories"}
                      data-bs-toggle="dropdown"
                    >
                      Categories
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to={"/categories"}>
                          All Categories
                        </Link>
                      </li>
                      {categories?.map((c) => (
                        <li>
                          <Link
                            className="dropdown-item"
                            to={`/category/${c.slug}`}
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {!auth?.user ? (
                    <>
                      <li className="nav-item">
                        <NavLink to="/register" className="nav-link">
                          Register
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/login" className="nav-link">
                          Login
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          style={{ border: "none" }}
                        >
                          {auth?.user?.name}
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li>
                            <NavLink
                              to={`/dashboard/${
                                auth?.user?.role === 1 ? "admin" : "user"
                              }`}
                              className="dropdown-item"
                            >
                              Dashboard
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={handleLogout}
                              to="/login"
                              className="dropdown-item"
                            >
                              Logout
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}
                  {/* <li className="nav-item">
                    <Badge className="mt-1" count={cart?.length} showZero>
                      <NavLink to="/cart" className="nav-link text-18 my-auto">
                        Cart
                      </NavLink>
                    </Badge>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
