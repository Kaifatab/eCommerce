import React, { useEffect, useState } from "react";
import "./checkout.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import checkimg from "./Image/checkimg.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function OffCanvas() {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <div
        class="offcanvas offcanvas-end fff"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        {/* {[1, 2, 3].map((card, index) => (
          <div
            key={index}
            className="w-100 text-start py-4 border-bottom border-1"
          >
            <div className="d-flex">
              <div className="w-s100 w-15 ">
                <img
                  className="w-100 h-100"
                  src={checkimg}
                  alt="this is an icon"
                />
              </div>
              <div className="d-flex w-85 ms-2">
                <h6 className="fw-bold my-auto">
                  8.5"x9" Blake | Silk Part Remy Human Hair Topper With Layers |
                  Left Part
                </h6>
              </div>
            </div>
            <p className="mt-1">
              <small>
                Color : Natural Black With Brown Shades, Length : 12", Density :
                130%
              </small>
            </p>
            <div className="d-flex justify-content-between">
              <h5 className="fw-bold my-auto">$ {501 * amount}</h5>
              <div>
                <ButtonGroup size="sm">
                  <Button
                    onClick={() => {
                      if (amount === 0) return;
                      else
                        setAmount((prevs) => {
                          return prevs - 1;
                        });
                    }}
                    className="btn-light rounded-0 border"
                  >
                    <RemoveIcon />
                  </Button>
                  <Button className="btn-light rounded-0 border px-4">
                    {amount}
                  </Button>
                  <Button
                    onClick={() => {
                      setAmount((prevs) => {
                        return prevs + 1;
                      });
                    }}
                    className="btn-light rounded-0 border "
                  >
                    <AddIcon />
                  </Button>
                </ButtonGroup>
              </div>
              <div>
                <button size="sm" className="btn  py-0 me-3">
                  <DeleteIcon className="text-danger" />{" "}
                </button>
              </div>
            </div>
          </div>
        ))} */}
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">... asdfsdfsadf</div>
      </div>
    </>
  );
}
