import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetAllProducts, updateExistingCartcart } from "./redux/actions/productActions";
import ProductsContainer from "./components/ProductsContainer";
import ProductView from "./components/ProductView";
import CartView from './components/CartView';
import { Switch,Route } from 'react-router-dom';
import Home from "./components/Home";
import NationWisPrdDisplay from './components/NationWisPrdDisplay';

function App() {
  const productsDetails = useSelector((state) => {
    return state.productsDetails;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetAllProducts());
  }, []);

const cart = useSelector((state)=>{
  return productsDetails.cart
})
useEffect(()=>{
  cart.length>0 && localStorage.setItem("cart",JSON.stringify(cart))
},[cart])
useEffect(()=>{
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart"))
  console.log("Cart storage", cartLocalStorage)
  if(cartLocalStorage && cartLocalStorage.length> 0){
    dispatch(updateExistingCartcart(cartLocalStorage))
  }
},[])

  return (
    <div className="App">
      <NavBar />
      {/* <ProductsContainer/> */}
      {/* <ProductView/> */}
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/productview" exact component={ProductView}/>
        <Route path="/cart" exact component={CartView}/>
        <Route path="/american" exact component={NationWisPrdDisplay}/>
        <Route path="/indian" exact component={NationWisPrdDisplay}/>
        <Route path="/chineese" exact component={NationWisPrdDisplay}/>
      </Switch>
     
    </div>
  );
}

export default App;
