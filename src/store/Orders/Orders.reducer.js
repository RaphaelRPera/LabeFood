import { createReducer } from '@reduxjs/toolkit'


// export default createReducer(0, {
//     'SET_ORDERS': (state, action) => action.payload,
// })

export const orderReducer = createReducer(0, {
    'SET_ORDERS': (state, action) => action.payload,
})


export const activeOrderReducer = createReducer(0, {
    'SET_ACTIVE_ORDER': (state, action) => action.payload,
})