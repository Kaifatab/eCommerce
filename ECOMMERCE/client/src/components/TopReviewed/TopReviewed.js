/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./TopReviewed.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import card1 from "./card/e1.png";
import cardicon1 from "./card/cardicon1.svg";
import review from "./card/medal.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function TopReviewed() {
  const cards = [
    {
      id: 1,
      name: "card1",
    },
    {
      id: 2,
      name: "card2",
    },
    {
      id: 3,
      name: "card3",
    },
    {
      id: 4,
      name: "card4",
    },
  ];
  return (
    <>
      <div className="container ps-r d-flex flex-column">
        <div className="w-100 pb-3 text-center ">
          <h2 className="fw-bold fs-2 bg-wh text-dark px-4 pb-0 text-center text-uppercase animate__animated animate__fadeInDown ">
            top Reviewed products
          </h2>
          <p className=" text-secondary text-16 	">
            Discover your unique look, Browse our selection of wigs for him and
            her
          </p>
        </div>

        <div className="d-flex w-100 mt-5 flex-wrap gap-3 mx-auto justify-content-between ">
          {cards.map((card, index) => (
            <div key={index} className="card-main w-25 rounded-0 ">
              <div className="img-card position-relative">
                <img
                  className="w-100 h-100"
                  src={card1}
                  alt="This  is an  picture"
                />
                  <span    className="start-0 top-0 position-absolute p-2 pt-3">
                <img
               
                  src={review}
                  width={"60"}
                  alt="This  is an  picture"
                />
                </span>
                <button
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
                </button>
              </div>
              <div className="text-start p-3">
                <p className=" fw-bold text-16 text-dark">
                  SuperSkin - Ladies Blonde Wig
                </p>
                <p className="m-0 py-0 text-12 text-dark">
                  Be confident with any style you like to own from a large
                  variety of styles.
                </p>
                <div className="d-flex justify-content-between mt-2">
                  <button className="btn px-0 mt-1">
                    <FavoriteBorderIcon className="fs-3 fw-normal" />
                  </button>
                  <p className="text-20 fw-bold text-dark my-auto pt-1">$500</p>
                  <button
                   
                  className="btn ps-2 my-auto">
                    {" "}
                    <img
                      src={cardicon1}
                      className="w-100 "
                      alt="this is an icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-5 d-flex flex-column text-center">
          <button className="btn text-dark text-18">View Shop</button>
          <KeyboardArrowDownIcon className="text-dark m-auto mb-md-5" />
        </div>
      </div>
      {}
    </>
  );
}
