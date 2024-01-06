// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products:[],
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productIndex = state.products.findIndex(product => product._id == action.payload._id);
            if (productIndex == -1) {
                state.products = [...state.products, action.payload];
            }
            const updatedProduct = state.products.map(product => {
                if (product._id === action.payload._id) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            })
            state.products = [...updatedProduct];
        },
        removeProduct: (state, action) => {
            const filteredproduct = state.products.filter(product => product._id != action.payload)
            state.products = [...filteredproduct];
        },
        increment: (state, action) => {
            const quntityUpdate = state.products.map(product => {
                if (product._id == action.payload) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            })
            state.products = [...quntityUpdate];
        },
        decrement: (state, action) => {
            const quntityUpdate = state.products.map(product => {
                if (product._id == action.payload) {
                    if (product.quantity == 1) return {...product,quantity:1};
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            })
            state.products = [...quntityUpdate];
        }
    },
});

export const { addProduct, removeProduct, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;

