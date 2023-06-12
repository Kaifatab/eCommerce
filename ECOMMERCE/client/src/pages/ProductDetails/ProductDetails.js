import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SendIcon from "@mui/icons-material/Send";
import pic1 from "./Images/modalpic2.jpg";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import checkimg from "./Images/checkimg.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import CartContext from "../../Contexts/CartContext";
import currencyConverter from "../../utils/CurrencyChanger";
import discountCalculator from "../../utils/calculateDIscount";
import { SipRounded } from "@mui/icons-material";
import OffCanvas from "../../Pages/Checkout/OffCanvas";

export default function ProductDetails({ id, setCartRenderer, currency }) {
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState(null);
  const { product } = useParams();
  const [selectedAddOns, setSelectedAddons] = useState([]);
  const [amount, setAmount] = useState(0);
  const [cartAdded, setCartAdded] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorPrice, setSelectedColorPrice] = useState(0);
  const [sideCart, setSizeCart] = useState(false);
  console.log("sidecart", sideCart);
  const getProductDetails = async () => {
    try {
      const response = await axios.get(`/products/${product}`, {});
      setProductDetails(response.data);
      setAmount(
        discountCalculator(response.data.price, response.data.discount)
      );
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(productDetails);
  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    if (productDetails) {
      let cart = localStorage.getItem("cart");

      if (cart) {
        cart = JSON.parse(cart);
        if (cart.map((e) => e.product).includes(productDetails._id))
          setCartAdded(true);
      }
    }
  }, [productDetails]);

  useEffect(() => {
    if (productDetails) {
      setAmount(() => {
        const discountedPrice = discountCalculator(
          productDetails.price,
          productDetails.discount
        );
        const totalAddons = selectedAddOns.reduce(
          (acc, cur) => acc + parseFloat(cur.price),
          0
        );

        const totalPrice =
          parseFloat(discountedPrice) +
          parseFloat(selectedColorPrice) +
          parseFloat(totalAddons);
        return totalPrice;
      });
    }
  }, [selectedColorPrice, selectedAddOns, productDetails]);

  if (!productDetails) return <></>;

  function handleClick() {
    navigate("/checkout");
  }

  return (
    <>
      <div className="px120 d-flex my-5">
        <div className=" w-50 px-4">
          {
            <div className="w-100 position-relative">
              <img src={productDetails.photo} alt="wigs" className="w-100" />
              {productDetails.discount !== 0 && (
                <span className="position-absolute top-0 end-0 bg-danger text-light px-4 py-3 rounded-circle m-3">
                  <p className="fw-bold mb-0 mt-2 text-28">
                    {productDetails.discount}%
                  </p>
                  <p className="fw-bold my-0">OFF</p>
                </span>
              )}
            </div>
          }
        </div>
        <div className="w-50 px-4 my-auto">
          <h3 className="text-start fw-bold">{productDetails.name}</h3>

          <p className="text-start text-secondary">SKU: 2050</p>
          <div className="d-flex justify-content-between py-3 ">
            <div className="d-flex gap-3">
              {productDetails.discount != 0 && (
                <p className="fw-bold my-auto text-danger text-decoration-line-through text-28">
                  ${currencyConverter(currency, productDetails.price)}
                </p>
              )}
              <p className="fw-bold my-auto text-28 ms-3">
                $
                {currencyConverter(
                  currency,
                  productDetails.price -
                    (productDetails.price * productDetails.discount) / 100
                )}
              </p>
              {amount -
                (productDetails.price -
                  (productDetails.price * productDetails.discount) / 100) !==
                0 && (
                <p className="fw-bold my-auto text-28 text-theme-gray">
                  + $
                  {currencyConverter(
                    currency,
                    amount -
                      (productDetails.price -
                        (productDetails.price * productDetails.discount) / 100)
                  )}
                </p>
              )}
            </div>
            {/* <div className="d-flex gap-3">
              <div className="d-flex flex-column gap-3">
                <p className="fw-bold my-auto text-20">
                  Total: $
                  {currencyConverter(
                    currency,
                    amount -
                      (productDetails.price -
                        (productDetails.price * productDetails.discount) / 100)
                  )}
                </p>
                <button
                  className={`btn btn-dark rounded-0 fs-6`}
                  onClick={() => {
                    setSelectedAddons([]);
                  }}
                >
                  Remove All Add ons
                </button>
              </div>
            </div> */}
          </div>
          {productDetails.rating && (
            <div className="d-flex ">
              <h5 className="fw-bold my-auto d-flex">
                {productDetails.rating.map((e) => {
                  return <StarIcon className="text-black fw-bold" />;
                })}
              </h5>
              <p className="my-auto ms-1 text-secondary me-5">(90) Reviews</p>
            </div>
          )}
          <div className="text-start">
            {/* color */}
            <p className="text-secondary pt-3 ">Color :</p>
            <div className="d-flex gap-2">
              {productDetails.colors.map((e) => {
                return (
                  <div
                    style={{
                      opacity: selectedColor == e._id ? "1" : ".5",
                      border: "1px solid black",
                      padding: "10px",

                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (selectedColor == e._id) {
                        setSelectedColor(null);
                        setSelectedColorPrice(0);
                        // setAmount((prev) => prev - e.price);
                      } else {
                        setSelectedColor(e._id);
                        setSelectedColorPrice(e.price);
                        // setAmount((prev) => prev + e.price);
                      }
                    }}
                  >
                    <button
                      className="btn btn-dark rounded-circle px-3 py-3 text-dark fs-6"
                      style={{ backgroundColor: e.color }}
                    >
                      {/* {e.name} */}
                    </button>
                    <small className="my-auto" style={{ marginLeft: "10px" }}>
                      {e.name}
                    </small>
                  </div>
                );
              })}
            </div>

            {/* length*/}
            <>
              {productDetails &&
                productDetails.addOns.map((e) => {
                  return e ? (
                    <>
                      <p className="text-secondary pt-2 ">{e?.name} :</p>
                      <div className="d-flex gap-2">
                        {e?.values.map((f) => {
                          return (
                            <button
                              className={`btn btn-outline-secondary rounded-6 btn-${
                                selectedAddOns.map((e) => e._id).includes(f._id)
                                  ? "dark"
                                  : "lightpro"
                              } rounded-0 fs-6`}
                              onClick={(e) => {
                                setSelectedAddons((prev) => {
                                  const newState = [...prev];
                                  const idx = newState
                                    .map((e) => e._id)
                                    .indexOf(f._id);
                                  // console.log("selected addons idx", idx);
                                  if (idx == -1) {
                                    const idx_name = newState
                                      .map((e) => e.name)
                                      .indexOf(f.name);
                                    // console.log(idx_name);
                                    if (idx_name != -1) {
                                      newState[idx_name]._id = f._id;
                                      newState[idx_name].price = f.price;
                                      newState[idx_name].value = f.value;
                                    } else {
                                      newState.push({
                                        name: f.name,
                                        _id: f._id,
                                        price: f.price,
                                        value: f.value,
                                      });
                                    }
                                  } else {
                                    // console.log("hello");
                                    prev.splice(idx, 1);
                                  }
                                  // if (idx == -1) newState.push({ _id: f._id });
                                  // else newState.splice(idx);

                                  return [...newState];
                                });
                              }}
                            >
                              {f.value}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <></>
                  );
                })}
            </>

            <p className="mt-4 my-auto">
              <AccessTimeIcon className="me-1 my-auto" />
              <small className="text-theme-gray">
                Processing Time:
                <span className="text-secondary fw-bold ps-2">
                  15-20 business days
                </span>
              </small>
            </p>
            <p className="pt-3">
              <small className="text-theme-gray">
                {" "}
                Processing time does not include delivery time
              </small>
            </p>
            <p className="fw-bold my-auto text-theme-gray text-20 mb-4">
              Total : ${currencyConverter(currency, amount)}
            </p>
            <div className="w-100">
              <button
                className="btn btn-add py-2 px-5 me-4 fw-bold"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={() => {
                  setSizeCart((prevs) => {
                    return !prevs;
                  });
                  let cartItems = localStorage.getItem("cart");
                  if (!cartItems) {
                    cartItems = [];
                    cartItems.push({
                      product: productDetails._id,
                      addons: selectedAddOns,
                      amount: 1,
                      price: amount,
                      color: selectedColor,
                    });
                  } else {
                    cartItems = JSON.parse(cartItems);
                    if (
                      !cartItems
                        .map((e) => e.product)
                        .includes(productDetails._id)
                    ) {
                      cartItems.push({
                        product: productDetails._id,
                        addons: selectedAddOns,
                        amount: 1,
                        price: amount,
                        color: selectedColor,
                      });
                    } else {
                      cartItems.splice(
                        cartItems
                          .map((e) => e.product)
                          .indexOf(productDetails._id)
                      );
                    }
                  }
                  cartItems = JSON.stringify(cartItems);
                  localStorage.setItem("cart", cartItems);
                  setCartRenderer({});
                  setCartAdded((prev) => !prev);
                }}
              >
                <ShoppingCartIcon className="me-2" />{" "}
                {!cartAdded ? "ADD TO CART" : "REMOVE FROM CART"}
              </button>
              <button
                className={`btn outline-wish px-5 py-2 fs-6 `}
                onClick={() => {
                  setSelectedAddons([]);
                }}
              >
                Remove Add Ons
              </button>
              <button className=" btn outline-wish py-2 px-4 ms-3">
                + WISH LIST
              </button>
            </div>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Shopping Cart</h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px120 border-top ">
        <div className="w-100 text-start py-3 pt-5">
          <h5 className=" pb-2 fs-4 fw-bold">Description :</h5>
          <p className="pb-0 text-16 text-theme-gray">
            Welcome to Iconive, your one-stop destination for premium quality
            wigs. We're a team of passionate hair enthusiasts dedicated to
            providing our customers with the very best in hair products and
            customer service. Our exquisite collection of wigs is designed to
            cater to the needs of every individual, regardless of age or gender.
            We understand that choosing the perfect wig can be overwhelming,
            which is why we strive to make your shopping experience seamless and
            enjoyable.
          </p>
        </div>
        <div className="w-100 text-start py-2">
          <h5 className=" pb-2 fs-4 fw-bold">Shipping policy :</h5>
          <p className="pb-0 text-16 text-theme-gray">
            At Iconive, we understand how important it is for you to receive
            your products in a timely and efficient manner. That's why we offer
            fast and reliable shipping to ensure that your order arrives as
            quickly as possible.
            <button
              type="button"
              class="btn btn-outline-secondary text-14 py-0 mx-2"
              data-bs-toggle="modal"
              data-bs-target="#shippingModal"
            >
              Show More
            </button>
            <div
              class="modal fade"
              id="shippingModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      <SendIcon /> Shipping policy
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>
                      1 .
                      <small>
                        {" "}
                        All stock orders are processed within 24-48 hours of
                        receiving payment, and are shipped out as soon as
                        possible. However, If the product is not in stock or a
                        customer places a custom order, it might take 10-30 days
                        to manufacture as these items are mostly hand-crafted.
                      </small>
                    </p>{" "}
                    <p>
                      2 .
                      <small>
                        {" "}
                        We mainly Ship abroad via FedEx Logistics. We can also
                        use DHL Supply Chain, UPS etc verified International
                        Shipping Agents if needed. After the product is
                        manufactured/ is ready to be shipped, we send real
                        pictures or videos of that product to the following
                        customer if he asks for it. After buyer’s confirmation,
                        we will send the product to FedEx warehouses for
                        delivery. After handing over the package to FedEx for
                        the delivery, we will get a tracking code which we will
                        send to our customer for his/her convenience. With this
                        code, customers can easily find out the product's
                        location & whereabouts.
                      </small>
                    </p>
                    <p>
                      3 .
                      <small>
                        {" "}
                        Standard shipping usually takes between 5-12 business
                        days to arrive as per FedEx delivery system. Please note
                        that shipping times may vary depending on your location
                        and shipping method. Any issue regarding product
                        shipping is not our concern as this responsibility then
                        transfers to FedEx. So any issue regarding product
                        shipment after we handover the product to FedEx is not
                        our responsibility to solve, therefore not on us. We
                        offer free standard international shipping on all orders
                        over $200 all over the world. For orders under $200, a
                        shipping fee will be applied based on the weight and
                        size of the package.Please note that international
                        orders may be subject to additional customs fees and
                        taxes, which are the responsibility of the customer.
                      </small>
                    </p>
                    <p>
                      4 .
                      <small>
                        {" "}
                        If you have any questions or concerns about shipping,
                        please don't hesitate to contact our customer service
                        team. We're always here to help and ensure that you have
                        the best shopping experience possible.
                      </small>
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-dark"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </p>
        </div>
        <div className="w-100 text-start py-3 pb-5">
          <h5 className=" pb-2 fs-4 fw-bold">Return & Refund policy :</h5>
          <p className="pb-0 text-theme-gray text-16">
            Welcome to Iconive, your one-stop destination for premium quality
            wigs.
            <button
              type="button"
              class="btn btn-outline-secondary py-0 mx-2 text-14"
              data-bs-toggle="modal"
              data-bs-target="#refundandreturnpolicy"
            >
              Show More
            </button>
            <div
              class="modal fade"
              id="refundandreturnpolicy"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title " id="exampleModalLabel">
                      Return & Refund Policy
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <h5 className="fw-bold  my-2">
                      Thanks for shopping at Iconive. <br />
                    </h5>
                    <h5 className="fw-normal pb-3">
                      If you are not entirely satisfied with your purchase,
                      we're here to help.
                    </h5>
                    <p>
                      1 .
                      <small>
                        {" "}
                        All stock orders are processed within 24-48 hours of
                        receiving payment, and are shipped out as soon as
                        possible. However, If the product is not in stock or a
                        customer places a custom order, it might take 10-30 days
                        to manufacture as these items are mostly hand-crafted.
                      </small>
                    </p>{" "}
                    <p>
                      2 .
                      <small>
                        {" "}
                        We mainly Ship abroad via FedEx Logistics. We can also
                        use DHL Supply Chain, UPS etc verified International
                        Shipping Agents if needed. After the product is
                        manufactured/ is ready to be shipped, we send real
                        pictures or videos of that product to the following
                        customer if he asks for it. After buyer’s confirmation,
                        we will send the product to FedEx warehouses for
                        delivery. After handing over the package to FedEx for
                        the delivery, we will get a tracking code which we will
                        send to our customer for his/her convenience. With this
                        code, customers can easily find out the product's
                        location & whereabouts.
                      </small>
                    </p>
                    <p>
                      3 .
                      <small>
                        {" "}
                        Standard shipping usually takes between 5-12 business
                        days to arrive as per FedEx delivery system. Please note
                        that shipping times may vary depending on your location
                        and shipping method. Any issue regarding product
                        shipping is not our concern as this responsibility then
                        transfers to FedEx. So any issue regarding product
                        shipment after we handover the product to FedEx is not
                        our responsibility to solve, therefore not on us. We
                        offer free standard international shipping on all orders
                        over $200 all over the world. For orders under $200, a
                        shipping fee will be applied based on the weight and
                        size of the package.Please note that international
                        orders may be subject to additional customs fees and
                        taxes, which are the responsibility of the customer.
                      </small>
                    </p>
                    <p>
                      4 .
                      <small>
                        {" "}
                        If you have any questions or concerns about shipping,
                        please don't hesitate to contact our customer service
                        team. We're always here to help and ensure that you have
                        the best shopping experience possible.
                      </small>
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-dark"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </p>
        </div>
        <div className="d-flex w-100 pb-5">
          <div className="w-100 ">
            <iframe
              width="100%"
              height="715"
              src="https://www.youtube.com/embed/1mkB-ENIeco?start=336"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {sideCart && <OffCanvas>hello</OffCanvas>}
    </>
  );
}
