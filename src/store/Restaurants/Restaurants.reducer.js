import { createReducer } from '@reduxjs/toolkit'


export default createReducer(0, {
    'SET_RESTAURANTS': (state, action) => action.payload,
})

