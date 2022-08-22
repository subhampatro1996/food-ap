import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  addToCart,
  increaseProductQuantity,
  reduceCartItem,
  removeItemFromCart,
  stateReset,
} from "../redux/actions/productActions";
import { useHistory } from "react-router";
import { emptyCart } from "../redux/actions/productActions";

const CartView = () => {
  const [qnt, setQnt] = useState(0);
  const cart = useSelector((state) => {
    return state.productsDetails;
  });
  console.log("cartpage",cart)
  const totalPrice = () => {
    return cart.cart
      .map((item) => item.quantity * item.price)
      .reduce((a, b) => a + b, 0);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOrderClick = () => {
    Swal.fire({
      icon: "success",
      timer: "1000",
      position: "top-center",
      text: "Order Placed Succesfully",
      showConfirmButton: false,
    });
    history.push("/");
    localStorage.removeItem("cart");
    dispatch(stateReset());
  };

  const prodDetails = useSelector((state)=>{
    return state.productsDetails
  })
  // const search = cart.
  console.log("cartviewprod",prodDetails)
  const search = prodDetails.searchValue
  const filteredItem = () =>{
    return cart.cart.filter( i=> i.name.toLowerCase().includes(search))
  }
  // console.log("filteredItm",filteredItem())
  const res = filteredItem().map((ele)=>{
    console.log("name",ele.name)
  })
  // console.log(res)
  const handleCancel = ()=>{
    dispatch(emptyCart())
  }
  return (
    <div className="container">
      <div style={{ position: "relative", top: "95px" }}>
        <h1 className="pt-4 pb-3" style={{ borderBottom: "1px gray solid" }}>
          Welcome to cart page
        </h1>
        {cart.cart.length === 0 ? (
          <div>
            <h1 className="text-secondary mt-5 ">Your Cart is Empty</h1>
          </div>
        ) : (
          <>
            <div className="container" style={{ overflow: "auto" }}>
              <table className="table thead-dark">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItem().map((ele) => {
                    return (
                      <tr key={ele.id}>
                        <td style={{ paddingTop: "15px" }}>{ele.name}</td>
                        <td style={{ paddingTop: "15px" }}>{ele.price}</td>
                        <td style={{ paddingTop: "12px" }}>
                          <div className="d-flex justify-content-center">
                            <div className="sm-12 md-3">
                              <button
                                className="btn btn-sm btn-secondary "
                                name="dec"
                                onClick={() => {
                                  dispatch(reduceCartItem(ele.id));
                                }}
                              >
                                -
                              </button>
                            </div>

                            <div className="sm-12 md-3">
                              <span className="mx-3"> {ele.quantity}</span>
                            </div>

                            <div className="sm-12 md-3">
                              <button
                                className="btn btn-sm btn-secondary"
                                name="inc"
                                onClick={(e) => {
                                  dispatch(increaseProductQuantity(ele.id));
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td style={{ paddingTop: "15px" }}>
                          {ele.price * ele.quantity}
                        </td>
                        <td>
                          <button
                            className="btn"
                            onClick={() => {
                              dispatch(removeItemFromCart(ele.id));
                            }}
                          >
                            <i class="bi bi-trash-fill"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan="5">
                      <div className="my-2" style={{ width: "100%" }}>
                        <h2>Total - {totalPrice()}</h2>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <button
                className="btn btn-lg btn-success mt-2 mx-2"
                style={{ width: "250px" }}
                onClick={handleOrderClick}
              >
                {" "}
                Place Order
              </button>
              <br/>
              {/* <button onClick={handleCancel}>Cancel</button> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartView;
