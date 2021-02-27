import { createReducer } from '@reduxjs/toolkit'

export default createReducer(0, {
    'SET_USER': (state, action) => action.payload
})