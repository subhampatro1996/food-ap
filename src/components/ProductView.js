import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart, reduceCartItem } from "../redux/actions/productActions";
const ProductView = () => {
  const cart = useSelector((state)=>{
    return state.productsDetails.cart
  })
  const items = useSelector((state)=>{
      return state.productsDetails.productsList
  })
  const prod = useSelector((state) => {
    return state.productsDetails;
  });
  const dispatch = useDispatch()
 
  const search = useSelector(state =>{
    return state.productsDetails.searchValue
  })
  const filteredItem = () =>{
    return prod.productsList.filter( i=> i.name.toLowerCase().includes(search.toLowerCase()))
  }

  const handleReduce =(id)=>{
    dispatch(reduceCartItem(id))
  }

  
  const cartItems = useSelector((state)=>{
    return state.productsDetails.cart
    })
    const handleAddToCart = (id)=>{

      const isProductExistsInCart = cartItems.some(item => item.id ===id )
      const existingProduct = cartItems.filter(item => item.id ===id )[0]
      
      let item 
      if(isProductExistsInCart){
        item ={...existingProduct, quantity:existingProduct.quantity+1}
      } else{
        const res = items.filter((ele)=>{
          return ele.id === id
      })[0]
      item = {...res, quantity:1}
      }
        // dispatch(addToCart(id))     

        // console.log(res)
       
        dispatch(addToCart(item))
    }
  const checkCartForItems = (id)=>{
    const item = cart.filter(item => item.id === id)
    
    if(item.length === 1){
            return (
              <div className="w-100">
           
         <button
           className="btn btn-sm btn-secondary"
           name="dec"
           onClick={() => {
             handleReduce(id);
           }}
         >
           -
         </button>
         <span className="mx-3">{item[0]?.quantity}</span>
         <button
           className="btn btn-sm btn-secondary"
           name="inc"
           onClick={() => {
             handleAddToCart(id)
           }}
         >
           +
         </button>
        
              </div>
            )
    } else {
      return (
        <button
      type="button"
      class="btn btn-block btn-outline-secondary mb-2 w-100"
      onClick={()=>{handleAddToCart(id)}}
    >
      Add To Cart
    </button>
      )

    }
  }

  return (
    <div className="container" style={{marginTop:"105px",justifyContent:"center"}}>
      <div className="row">
        {/* <div className="col-lg-12"> */}
        {/* <h1>Productdetails - {prod.productsList.length}</h1> */}
        {filteredItem().map((ele) => {
        
          return (
            <div class="col-sm-6 col-md-4 col-lg-3 ">
              <div
                className="shadow card mt-4 mx-auto "
                style={{ width: "14rem", height: "22rem" }}
              >
                <div className="card-body d-flex flex-column pb-0">
                  <img
                    class="card-img-top mb-2 pb-2"
                    src={ele.img}
                    alt="Card image cap"
                    style={{borderBottom:"1px gray solid"}}
                  />
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>            

                  
                </div>
                <div
                    class="card-footer text-muted w-100"
                    style={{
                      background: "transparent",
                      borderTop: "0px",
                      justifyContent:"center"
                    }}
                  >
                      {
                      checkCartForItems(ele.id)
                      }
                  
                    
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // </div>
  );
};

export default ProductView;
