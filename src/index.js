import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();
store.subscribe(() => {
  console.log("Store Updated", store.getState());
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
