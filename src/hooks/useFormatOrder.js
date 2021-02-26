import React from 'react'
import { useSelector } from 'react-redux'


export const useFormatOrders = (restaurant, product, qtt) => {
    const actualOrders = useSelector(state => state.orders)

    let newOrders= actualOrders && JSON.parse(JSON.stringify(actualOrders))

    if (newOrders) {
        let restaurantUpdated = false
        for (let i = 0; i < newOrders.length; i++) {
            let {restaurantOrder, orders} = newOrders[i]
            if (restaurantOrder.id === restaurant.id) {
                restaurantUpdated = true
                let orderUpdated = false
                for (let z = 0; z < orders.length; z++) {
                    let order = orders[z]
                    if (order.id === product.id) {
                        if (qtt <= 0){
                            newOrders[i].orders.splice(z, 1)
                            if (!newOrders[i].orders.length) {
                                newOrders.splice(i,1)
                            }
                            orderUpdated = true
                        } else {
                            newOrders[i].orders[z] = {...order, qtt}
                            orderUpdated = true
                        }
                    }
                }

                if (!orderUpdated) {
                    if (qtt > 0){
                        newOrders[i].orders.push({...product, qtt})
                    }
                }
            }
        }

        if (!restaurantUpdated) {
            if (qtt > 0){
                // newOrders.push({restaurantOrder: restaurant, orders: [{...product, qtt}]})
                newOrders = qtt > 0 ? 'Other active order' : 0
            }
        }

    } else {
        newOrders = qtt > 0 ? [{restaurantOrder: restaurant, orders: [{...product, qtt}]}] : 0
    }

    if (!newOrders.length) {newOrders = 0}
    return newOrders
}



