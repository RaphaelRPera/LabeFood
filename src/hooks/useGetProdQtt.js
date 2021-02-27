import { useSelector } from "react-redux"


export const useGetProdQtt = (id) => {
    const actualOrders = useSelector(state => state.orders)

    if (actualOrders) {
        for (let i = 0; i < actualOrders.length; i++) {
            const {orders} = actualOrders[i]
            for (let z = 0; z < orders.length; z++) {
                const product = orders[z]
                if (product.id === id) {
                    return product.qtt
                }
            }
        }    
    }
    return 0
}