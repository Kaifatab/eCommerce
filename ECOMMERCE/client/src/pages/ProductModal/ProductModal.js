import React, { useState } from "react";
import "./ProductModal.css";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import pic1 from "./Images/modalpic2.jpg";
import pic from "./Images/modalpic.webp";

export default function ProductModal({ id }) {
  return (
    <>
      <div className="modal " id={id}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div clasclassNames="d-flex ">
              <span
                data-bs-dismiss="modal"
                aria-label="Close"
                className="w-nai me-nai "
              >
                <CloseIcon />{" "}
              </span>
            </div>
            <div className="modal-body d-flex">
              <div className=" w-50 px-4">
                <div className="w-100 position-relative">
                  <img src={pic1} alt="wigs" className="w-100" />
                  <span className="position-absolute top-0 end-0 bg-dark text-light px-4 py-3 rounded-circle m-3">
                    <h4 className="fw-bold mb-0 mt-2">20%</h4>
                    <h4 className="fw-bold mt-0 mb-2">Off</h4>
                  </span>
                </div>
                <div className="w-100 d-flex justify-content-between py-3">
                  <img src={pic1} alt="wigs" className="wm-22 h-25 " />
                  <img src={pic1} alt="wigs" className="wm-22 h-25 " />
                  <img src={pic1} alt="wigs" className="wm-22 h-25  " />
                  <img src={pic1} alt="wigs" className="wm-22 h-25 " />
                  <img src={pic1} alt="wigs" className="wm-22 h-25 " />
                </div>
              </div>
              <div className="w-50 px-4 my-auto">
                <h5 className="text-start fw-bold">
                  7"X8" COURTNEY | MONO PART | LEFT PART REMY HUMAN HAIR TOPPER
                </h5>

               
                <div className="d-flex justify-content-between pt-3">
                  <div className="d-flex  gap-3">
                    <h4 className="fw-bold my-auto text-danger text-decoration-line-through ">
                      $308
                    </h4>
                    <h4 className="fw-bold my-auto ">$240</h4>
                  </div>
                  <span className="d-flex ">
                    <h5 className="fw-bold my-auto d-flex">
                      <StarIcon className="text-black fw-bold" />
                      <StarIcon className="text-black fw-bold" />
                      <StarIcon className="text-black fw-bold" />
                      <StarIcon className="text-black fw-bold" />
                      <StarIcon className="text-black fw-bold" />
                    </h5>
                    <p className="my-auto ms-1 text-secondary me-5">
                      (90) Reviews
                    </p>
                  </span>
                </div>
                <div className="text-start">
                  {/* color */}
                  <p className="text-secondary pt-2 ">Color :</p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-dark rounded-circle px-3 py-2 text-dark fs-6">
                      p
                    </button>
                    <button className="btn btn-dark rounded-circle px-3 py-2 text-dark fs-6">
                      p
                    </button>
                    <button className="btn btn-dark rounded-circle px-3 py-2 text-dark fs-6">
                      p
                    </button>
                  </div>

                  {/* length*/}
                  <p className="text-secondary pt-2 ">Hair length :</p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-dark rounded-0 fs-6">12"</button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      14"
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      16"
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      18"
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      20"
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      22"
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      24"
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      26"
                    </button>
                  </div>

                  {/*Lengtth */}
                  <p className="text-secondary pt-2 ">Base size :</p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-dark rounded-0 fs-6">7x5</button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      8x5
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      8x6
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      9x7
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      10x7
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      10x8
                    </button>
                  </div>

                  {/*density */}
                  <p className="text-secondary pt-2 ">Density :</p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-dark rounded-0 fs-6">80%</button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      90%
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      100%
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      120%
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      140%"
                    </button>
                  </div>

                  {/* style */}
                  <p className="text-secondary pt-2 ">Style :</p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-dark rounded-0 fs-6">
                      Straight
                    </button>
                    <button className="btn btn-outline-dark rounded-0 fs-6">
                      Wavy
                    </button>
                  </div>

                  <p className="text-secondary pt-2 ">FH Base size :</p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-dark rounded-0 fs-6 d-flex fw-bold">
                      8x12x16{" "}
                      <p className="my-auto ms-3 fw-normal"> Like this</p>
                    </button>
                  </div>
                  <p className="pt-3 my-auto ">
                    <AccessTimeIcon className="me-1 my-auto" />
                    <small>
                      Processing Time:
                      <span className="text-secondary fw-bold">
                        3-5 business days
                      </span>
                    </small>
                  </p>
                  <p className="pt-1">
                    <small>
                      {" "}
                      Processing time does not include delivery time
                    </small>
                  </p>
                 

                  <div className="w-100">
                    <button  className="w-50 btn btn-dark py-2 rounded-0 me-4">
                      <ShoppingCartIcon /> ADD TO CART
                    </button>
                    <button className=" btn btn-outline-dark py-2 px-5  rounded-0">
                      + WISH LIST
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary rounded-0 me-5 px-4"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
