import { createSlice } from "@reduxjs/toolkit";


const options = {
    name: "cart",
    initialState: {
        products: [

        ],
        quantity: 0,
        amount: 1,
        
    },
    reducers: {
        addProduct(state, action) {
            const { payload } = action;
            if(!state.products.map(product => product.id).includes(payload.id)){
                const existingCartProduct = state.products.find(p => p.id === payload.id);
                const existingCartProductAmount = existingCartProduct ? existingCartProduct.productAmount : 0;

                state.quantity += existingCartProductAmount === 0 ? 1 : 0;
                state.products.push({ ...payload, productAmount: existingCartProductAmount + 1 });
                
            }

            
        },
        addProductAmount(state, action) {
            const { payload } = action;
            state.products.find(p => p.id === payload.id).productAmount += 1;

        },
        removeProductAmount(state, action) {
            const { payload } = action;
            state.products.find(p => p.id === payload.id).productAmount -= 1;
        }
   
    }
}

const cartSlice = createSlice(options)

export const { addProduct, addProductAmount, removeProductAmount } = cartSlice.actions;
export default cartSlice.reducer;