import React from "react";
import "./style/home.css";
import { useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const history = useHistory();
  const search = useSelector((state) => {
    return state.productsDetails.searchValue;
  });
  if (search.length > 0 && location.pathname === "/") {
    history.push("/productview");
  }
  return (
    <div
      className="container "
      style={{ marginTop: "115px", justifyContent: "center" }}
    >
      <div className="row d-flex-jsutify-content-center pt-5">
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <div
            className="shadow card mt-4 mx-auto"
            style={{ width: "18rem", height: "25rem" }}
          >
            <div className="card-body d-flex flex-column">
              <img
                className="card-img-top hover-zoom mb-2 p-2"
                src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
                alt="Card image cap"
                style={{ borderBottom: "1px lightgrey solid" }}
              />
              <h5 className="card-title my-3">American</h5>
              <Link to="/american">
                <button
                  type="button"
                  name="american"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Check American
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <div
            className="shadow card mt-4 mx-auto"
            style={{ width: "18rem", height: "25rem" }}
          >
            <div className="card-body d-flex flex-column">
              <img
                className="card-img-top hover-zoom mb-2 p-3"
                src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
                alt="Card image cap"
                style={{ borderBottom: "1px lightgrey solid" }}
              />
              <h5 className="card-title my-3">Indian</h5>
              <Link to="/indian">
                <button
                  type="button"
                  name="american"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Check Indian
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <div
            className="shadow card mt-4 mx-auto"
            style={{ width: "18rem", height: "25rem" }}
          >
            <div className="card-body d-flex flex-column">
              <img
                className="card-img-top hover-zoom mb-2 p-3"
                src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
                alt="Card image cap"
                style={{ borderBottom: "1px lightgrey solid" }}
              />
              <h5 className="card-title my-3">Chinese</h5>
              <Link to="/chineese">
                <button
                  type="button"
                  name="american"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Check Chinese
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

