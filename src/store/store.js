import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './Orders/Orders.reducer'
import restaurantReducer from './Restaurants/Restaurants.reducer'


const store = configureStore({
    reducer: {
        orders: orderReducer,
        restaurantList: restaurantReducer,
    }
})

export default store