import { createAction } from '@reduxjs/toolkit'
import restaurantData from '../../data/restaurantData'

export const setRestaurants = createAction('SET_RESTAURANTS')

export const getRestaurants = () => {
    // console.log('getRestaurants')
    return dispatch => {
        dispatch(setRestaurants(restaurantData))
    }
}