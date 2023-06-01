/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./Navigation.css";
import { Badge } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "./image/profile.svg";
import search from "./image/search.svg";
import wish from "./image/wishj.svg";
import cart from "./image/cart.svg";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

export default function Navigation() {
  return (
    <div className="shadow">
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
          <p className="text-14 navtxt my-auto text-theme-gray ">support.infinity@gmail.com</p>
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
      <div className="d-flex justify-content-between px115 sticky-top py-4">
        <div className="text-start">
          <a
            href="/home"
            className="text-decoration-none text-start text-black my-auto"
          >
            <h2 className="fw-bold ps-1 my-auto text44">INFINITY</h2>
          </a>
        </div>
        <div className="my-auto w-50 ">
          <form class="d-flex">
            <input
              class="form-control rounded-end-0 w-100 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-secondary rounded-start-0" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="d-flex  my-auto gap-3">
          {/* <div className="m-auto  ">
            <img src={search} alt="this is an icon" />
          </div> */}
          <div className="m-auto ">
            <FavoriteBorderOutlinedIcon  className="fs-2 scale13 text-dark pt-1 "/>
          </div>
          <div className="m-auto">
            <a href="/checkout">
              <Badge
                //    badgeContent={cartItems}
                color="primary"
              >
                <LocalMallOutlinedIcon  className="fs-1 text-dark "/>
              </Badge>
            </a>
          </div>
          <div className="m-auto">
            <a href="/profile">
              <img
                src={profile}
                className="shadow-lg rounded-circle"
                alt="this is an icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex mx-auto bg-offwhite shadow ">
        <Navbar expand="lg m-auto " className="my-0 py-0 border0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-5 d-flex mx-auto position-relative border-0">
              <Nav.Link href="/home" className="text-black text-nav  drop">
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

              <Nav.Link href="#home" className="text-black drop text-nav">
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
        </Navbar>
      </div>
    </div>
  );
}
