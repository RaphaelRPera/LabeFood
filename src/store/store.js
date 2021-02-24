import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './Orders/Orders.reducer'


const store = configureStore({
    reducer: {
        orders: orderReducer,
    }
})

export default store