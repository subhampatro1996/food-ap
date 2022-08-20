
import { UPDATE_SEARCH_VALUE, GET_ALL_PRODUCTS, ADD_TO_CART, REMOVE_ITEM, REDUCE_ITEM, INCREASE_ITEM, UPDATE_CART, RESET } from '../actions/productActions';

const initialValue = {
    isLoading : true,
    error:{
        message:""
    },
    productsList:[],
    cart : [],
    searchValue:""
}


const productReducer = (state=initialValue, action)=>{
    switch (action.type) {
        case UPDATE_SEARCH_VALUE:{
            return {...state, searchValue:action.payload}
        }
        case GET_ALL_PRODUCTS:{
            return {...state, productsList : action.payload}
        }
        case ADD_TO_CART:{
            let newCart
            const updatedCartItems = state.cart.filter(item => item.id === action.payload.id)
            if(updatedCartItems.length === 1){
                newCart = state.cart.map(item =>{
                    if(item.id === action.payload.id){
                        return {...action.payload}
                    }
                    return item
                })
            } else {
                newCart = [...state.cart,action.payload]
            }
            
            return {...state, cart : newCart}
        }
        case REMOVE_ITEM:{
            
            const res = state.cart.filter(ele => ele.id !== action.payload)
            return {...state, cart:[...res]}
        }
        case REDUCE_ITEM:{
            const selectedProduct = state.cart.filter(item => item.id === action.payload)[0]
            let newCart
            if(selectedProduct.quantity === 1){
              
                newCart = state.cart.filter(item=> item.id !== action.payload)
            } else {
                
                newCart = state.cart.map(item=> {

                    if(item.id === action.payload){
                        item.quantity = item.quantity-1
                        return item
                    }
                    return item
                    
                })
            }
            return {...state, cart : newCart}

        }

        case INCREASE_ITEM:{
            const newCart = state.cart.map(item => {
                if(item.id === action.payload){
                    item.quantity = item.quantity+1
                    return item
                }
                return item
            })
            return {...state, cart : newCart}
        }
        case UPDATE_CART:{
            return {...state, cart:action.payload}
        }
        case RESET:{
            return {...initialValue}
        }
        default:
            return state;
    }
}


export default productReducer