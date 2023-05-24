import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listCartItems: [
    ],
    numberItemsInCart: 0,
    cartTotal: 0,
}

const calcCartTotal = (currentState) => {
    let cartTotal = 0;
    for (let i = 0; i < currentState.listCartItems.length; i++) {
        cartTotal += currentState.listCartItems[i].cart_item.track_price
    }
    return cartTotal
}
const calcTotalCartItem = (currentState) => {
    return currentState.listCartItems.length
}

export const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.listCartItems = [...state.listCartItems, action.payload]
            state.cartTotal = calcCartTotal(state)
            state.numberItemsInCart = calcTotalCartItem(state)
            // let itemTotal = 0;
            // state.cartTotal = state.listCartItems.map((item) => {
            //     itemTotal += state.listCartItems[item].cart_item.track_price;
            //     return itemTotal
            // })
        },
        removeFromCart: (state, action) => {
            state.listCartItems = state.listCartItems.filter(item => item.cart_item_number !== action.payload)
            state.cartTotal = calcCartTotal(state)
            state.numberItemsInCart = calcTotalCartItem(state)
        }
        
    }
})

export const { addToCart, removeFromCart } = cartItemsSlice.actions
export const selectCartItems = (state) => state.cartItems.listCartItems
export const selectNumberItemsInCart = (state) => state.cartItems.numberItemsInCart
export const selectCartTotal = (state) => state.cartItems.cartTotal
export default cartItemsSlice.reducer