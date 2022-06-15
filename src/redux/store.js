import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import cartReducer from './cartRedux';

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
}
)