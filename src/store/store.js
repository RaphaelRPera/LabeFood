import { configureStore } from '@reduxjs/toolkit'
import { orderReducer } from './Orders/Orders.reducer'
import { activeOrderReducer } from './Orders/Orders.reducer'
import restaurantReducer from './Restaurants/Restaurants.reducer'
import userReducer from './User/User.reducer'


const store = configureStore({
    reducer: {
        orders: orderReducer,
        activeOrder: activeOrderReducer,
        restaurantList: restaurantReducer,
        user: userReducer,
    }
})

export default store