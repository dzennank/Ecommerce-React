import { createSlice } from "@reduxjs/toolkit";


const options = {
    name: "cart",
    initialState: {
        products: [

        ],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct(state, action) {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload;
        }
    }
}

const cartSlice = createSlice(options)

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;