import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { updateSearchValue } from "../redux/actions/productActions";
import CartView from "./CartView";
import Home from "./Home";

const NavBar = (props) => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.productsDetails.cart;
  });

  const cartItemsLength = () => {
    if (cart.length !== 0) {
      return cart.map((item) => item.quantity).reduce((x, y) => x + y, 0);
    }
  };
  useEffect(() => {
    dispatch(updateSearchValue(search));
  }, [search]);

  return (
    <div className="container fixed-top ">
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#f7881f" }}
      >
        <div className="container-fluid d-flex justify-content-center ">
          <div className="col-sm-12 col-md-6 my-sm-3 my-md-0 p-2">
            <a className="navbar-brand" href="#">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Food App
              </Link>
            </a>
          </div>
          <div className="col-sm-12 col-md-6 " id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <form className="d-flex " role="search">
                <input
                  className="form-control me-2 px-5 w-100"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <i
                  class="bi bi-search search-icon"
                  style={{ color: "gray" }}
                ></i>
                <Link to="/cart">
                  <i
                    class="bi bi-cart-dash ms-3"
                    style={{
                      alignSelf: "center",
                      fontSize: "1.5rem",
                      color: "white",
                    }}
                  ></i>
                </Link>
                <b style={{ color: "white" }}>{cartItemsLength()}</b>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
