import { createSlice } from "@reduxjs/toolkit";


const options = {
    name: "cart",
    initialState: {
        products: [

        ],
        quantity: 0,
        amount: 0,
        
    },
    reducers: {
        addProduct(state, action) {

            
            if(!state.products.map(p => p.id).includes(action.payload.id)){
                state.products.push(action.payload);
                state.quantity += 1;
                
            }

            state.amount = 1
            
            
            
            
        }
    }
}

const cartSlice = createSlice(options)

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;