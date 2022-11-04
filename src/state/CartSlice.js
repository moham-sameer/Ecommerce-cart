import {createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
const initialState = {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")): [],
    cartTotalQuantity:0,
    cartTotalAmount:0,   
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
     addToCart(state,action){
        const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
        if(itemIndex >= 0){
            state.cartItems[itemIndex] =
               {
                ...state.cartItems[itemIndex], cartQuantity:state.cartItems[itemIndex].cartQuantity+1
            }
            toast.info("Increased product quantity",{
                position:"top-right"
            })
        }else{
              
            const tempProduct = {...action.payload, cartQuantity:1}
              state.cartItems.push(tempProduct)
            toast.success(`${action.payload.name} added to cart`,{
                position: "top-left",
            });
        }

       localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
     },
     removeFromCart(state,action){
        const data = state.cartItems.filter((item)=>item.id !== action.payload.id)
        
            state.cartItems=data
        
        toast.error(`${action.payload.name} removed from cart`,{
            position:"bottom-left"
        })
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
     },
     clearCart(state,action){
        
            state.cartItems = []
        
        toast.error("Cart cleared",{
            position:"bottom-left"
        })
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
     },
     decCart(state,action){
        const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
        if(state.cartItems[itemIndex].cartQuantity > 1){
            state.cartItems[itemIndex].cartQuantity -= 1;

            toast.error("decreased product quantity",{
                position:"bottom-left"
            })
         
        } else if(state.cartItems[itemIndex].cartQuantity ===1){
            const data = state.cartItems.filter((item)=>item.id !== action.payload.id)
            

                    state.cartItems =data
            
            toast.error(`${action.payload.name} removed from cart`,{
                position:"bottom-left"
            })
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

     },
     getTotals(state,action){
      let {total, quantity} =  state.cartItems.reduce((cartTotal,cartItem)=>{
            const {price, cartQuantity} = cartItem;
             const itemTotal = price * cartQuantity

             cartTotal.total += itemTotal;
             cartTotal.quantity += cartQuantity
             return cartTotal
        },{
            total:0,
            quantity:0
        })
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total

     }

    }
});
export const {addToCart,removeFromCart,clearCart,decCart,getTotals} = cartSlice.actions;
export default cartSlice.reducer;