import axios from "axios";

export const UPDATE_SEARCH_VALUE = "UPDATE_SEARCH";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const REDUCE_ITEM = "REDUCE_ITEM"
export const INCREASE_ITEM = "INCREASE_ITEM"
export const UPDATE_CART = "UPDATE_CART"
export const RESET = "RESET"
export const updateSearchValue = (str) => {
  return {
    type: UPDATE_SEARCH_VALUE,
    payload: str,
  };
};

export const stateReset =()=>{
  return {
    type:RESET
  }
}

export const asyncGetAllProducts = () => {
    return (dispatch)=>{
        axios.get('http://localhost:3004/items')
            .then((res)=>{
              dispatch(getAllProducts(res.data))
              // console.log(res.data)
            })
    }
};

export const getAllProducts = (data)=>{
  return{
    type : GET_ALL_PRODUCTS,
    payload : data
  }
}

export const addToCart = (item)=>{
  console.log("item " , item)
    return{
      type: ADD_TO_CART,
      payload : item
    }
}

export const removeItemFromCart = (id)=>{
  return{
    type : REMOVE_ITEM,
    payload : id
  }
}




export const reduceCartItem =(id)=>{
return {
  type : REDUCE_ITEM,
  payload:id
}
}

export const increaseProductQuantity =(id)=>{
  return {
    type : INCREASE_ITEM,
  payload:id
  }
}

export const updateExistingCartcart =(cart)=>{
  return {
    type : UPDATE_CART,
  payload:cart
  }
}