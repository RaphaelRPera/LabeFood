import { createReducer } from '@reduxjs/toolkit'


export default createReducer(0, {
    'SET_ORDERS': (state, action) => action.payload
})
