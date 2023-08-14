import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Subscription from "../../components/Subscription/Subscription";
import TopReviewed from "../../components/TopReviewed/TopReviewed";
import TopSelling from "../../components/TopSelling/TopSelling";
import banner4 from "./image/banner4.jpg";
import banner2 from "./image/banner2.jpg";
import banner3 from "./image/banner3.jpg";
import banner11 from "./image/sub1.jpg";
import banner22 from "./image/sub2.jpg";
import "./LandingPage.css";

export default function LandingPage() {
  const navigation = useNavigate();
  return (
    <>
      {/* carosol componant */}
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner2} class="d-block w-100" alt="..." />
            <div class="position-absolute top30 left30">
              <div className="my-auto">
                <h3 className="text-light fw-lighter">UP TO 15% DISCOUNT</h3>
                <h1 className="text54 text-light fwbolder">
                  World-class watch <br /> made for you
                </h1>
                <a href="/shop">
                  <button
                    onClick={() => {
                      navigation("/shop");
                    }}
                    className="btn btn-outline-light px-5 py-2"
                  >
                    SHOP NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner4} class="d-block w-100" alt="..." />
            <div class="position-absolute top30 left30">
              <div className="my-auto">
                <h3 className="text-dark fwlight">UP TO 15% DISCOUNT</h3>
                <h1 className="text54 text-dark fwbolder">
                  Crafted with love <br /> and care
                </h1>
                <a href="/shop">
                  <button
                    onClick={() => {
                      navigation("/shop");
                    }}
                    className="btn btn-dark px-5 py-2"
                  >
                    SHOP NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner3} class="d-block w-100" alt="..." />
            <div class="position-absolute top30 left30">
              <div className="my-auto">
                <h3 className="text-dark fwlight">UP TO 15% DISCOUNT</h3>
                <h1 className="text54 text-dark fwbolder">
                  Beautiful designs at <br /> it's best
                </h1>
                <a href="/shop">
                  <button
                    onClick={() => {
                      navigation("/shop");
                    }}
                    className="btn btn-dark px-5 py-2"
                  >
                    SHOP NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* catagory section */}
      <div className="my-5 d-flex container mb5 gap-4">
        <div className="w-50 bg-sub1 d-flex">
          <div className="w-60 p-5 ms-auto text-top">
            <h2 className="text-white">ELEGANT SMARTWATCH</h2>
            <p className="text-white">LATEST DESIGN</p>
          </div>
        </div>
        <div className="w-50 bg-sub2 d-flex">
          <div className="w-60 p-5 ms-auto text-top">
            <h2 className="text-white">CLOCKS AND CHIMES</h2>
            <p className="text-white">NOW IN STORE</p>
          </div>
        </div>
        <div className="w-50 bg-sub3 d-flex">
          <div className="w-60 p-5 ms-auto text-top">
            <h2 className="text-white">CLASSIC WRISTWATCH</h2>
            <p className="text-white">VINTAGE COLLECTION</p>
          </div>
        </div>
      </div>

      <TopSelling />
      <TopReviewed />
      {/* <Subscription /> */}
    </>
  );
}
