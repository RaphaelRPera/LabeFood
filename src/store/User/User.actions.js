import { createAction } from '@reduxjs/toolkit'
import userData from '../../data/userData'


export const setUser = createAction('SET_USER')

export const getUser = () => {
    return dispatch => {
        dispatch(setUser(userData))
    }
}