/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import sp1 from "./footer/sp1.svg"
import sp2 from "./footer/sp2.svg"
import sp3 from "./footer/sp3.svg"
import p1 from "./footer/p1.svg"
import p2 from "./footer/p2.svg"
import p3 from "./footer/p3.svg"
import p4 from "./footer/p4.svg"
import p5 from "./footer/p5.svg"

export default function Footer() {
  return (
    <>
       <div className="bg-dark d-flex">
      <div className="py-5  d-flex justify-content-between gap-5 containerpro w-100">
        <div className="w-30  border-end border-secondary">
          <div>
            <p className="text-14 text-light text-start ms-2">Shipping Partner</p>
            <div className="text-start">
              <img src={sp1} className="" alt="this is an icon" />
              <img src={sp2} className="" alt="this is an icon" />
              <img src={sp3} className="" alt="this is an icon" />
            </div>
            <p className="text-14 text-light  text-start ms-2">Accepted Payment Methods</p>
            <div className="text-start">
              <img src={p1} className="" alt="this is an icon" />
              <img src={p2} className="" alt="this is an icon" />
              <img src={p3} className="" alt="this is an icon" />
              <img src={p4} className="" alt="this is an icon" />
              <img src={p5} className="" alt="this is an icon" />
            </div>
          </div>
          
        </div>
        <div className="w-30 d-flex flex-column my-auto text-center">
          <h3 className="text-light fw-bold ">INFINITY</h3>
          <div className="mt-4 text-dark d-flex gap-2 mx-auto">
            <a
              className="mx-1"
              href="https://www.facebook.com/profile.php?id=100087712010768"
            >
              <button className="btn btn-outline-light p-2 rounded-circle">
                <FacebookIcon />
              </button>
            </a>
            <a className="mx-1" href="https://wa.me/message/PIZLMGBXCLUUN1">
              <button className="btn btn-outline-light p-2 rounded-circle">
                <WhatsAppIcon />
              </button>
            </a>
            <a
              className="mx-1"
              href="https://www.instagram.com/invites/contact/?i=5jfrooti9ghz&utm_content=qa5m1k1"
            >
              <button className="btn btn-outline-light p-2 rounded-circle">
                <InstagramIcon />
              </button>
            </a>

            <a
              className="mx-1"
              href="https://twitter.com/Iconivehairwigs?t=NKMVGHrLlnyuKu5bZkZ3MA&s=35"
            >
              <button className="btn btn-outline-light p-2 rounded-circle">
                <TwitterIcon />
              </button>
            </a>
            <a
              className="mx-1"
              href="https://www.facebook.com/profile.php?id=100087712010768"
            >
              <button className="btn btn-outline-light p-2 rounded-circle">
                <YouTubeIcon />
              </button>
            </a>
            <a
              className="mx-1"
              href="https://www.facebook.com/profile.php?id=100087712010768"
            >
              <button className="btn btn-outline-light p-2 rounded-circle">
                <LinkedInIcon />
              </button>
            </a>
          </div>
        </div>
        <div className="w-30 px90 d-flex border-start border-secondary gap-5">
          <div className="text-start pe-4">
          <h6 className="fw-bold text-light pb-3 text-18">Our Policies</h6>
          <p className="text-14 text-light"><a href="#" className="text-decoration-none text-gray">Privacy Policy</a></p>
          <p className="text-14 text-light"><a href="#" className="text-decoration-none text-gray">Terms & Conditions</a></p>
      
          <p className="text-14 text-light"><a href="/about" className="text-decoration-none text-gray">About Us</a></p>
          <p className="text-14 text-light"><a href="/contact" className="text-decoration-none text-gray">Contact Us</a></p>
          </div>
          <div className="text-start">
          <h6 className="fw-bold text-18 text-light pb-3">Our Profile</h6>
          <p className="text-14 text-light">About Us</p>
          <p className="text-14 text-light">Our Shipping Partners</p>
          <p className="text-14 text-light">Payment methods </p>
          <p className="text-14 text-light">FAQ</p>
          </div>
        </div>
      </div>

    
    </div>
      <div className="bg-black text-center text-light  m-0 py-3">
        <p className=" border-dark  m-0">
          <small className="text-white-50">
          &#9400;  All Rights Reserved by{" "}
            <span className="text-light">INFINITY</span>
          </small>
        </p>
      </div>
    </>
 
  );
}
