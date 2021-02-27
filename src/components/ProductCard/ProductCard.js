import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrders } from '../../store/Orders/Orders.actions'
import { AddToCartContainer, BottomContainer, Container, Description, ImgContainer, InfoContainer, Name, OrderQtt, Price, QttButton, QuantityInput, TopContainer } from './style'
import { useGetProdQtt } from '../../hooks/useGetProdQtt'
import { formatOrders } from '../../hooks/formatOrder'


export const ProductCard = (props) => {
    const {restaurant, product} = props
    const {id, name, photoUrl, description, price, categories} = product
    const priceFormat = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    const [cartQtt, setCartQtt] = useState(0)
    const [cartTotalPrice, setCartTotalPrice] = useState(0)
    const totalPriceFormat = cartTotalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })


    const dispatch = useDispatch()
    const actualOrders = useSelector(state => state.orders)
    const actualQtt = useGetProdQtt(id)


    const dispatchNewOrder = (newOrder) => {
        if (newOrder === 'Other active order') {
            setCartQtt(0)
            window.alert('Existe um pedido de outro restaurante ativo. Aguarde sua conclusão')
        } else {
            dispatch(setOrders(newOrder))
        }
    }

    const setQtt = (type) => {
        let newQtt = type === 'add' ? cartQtt + 1 : type === 'subtract' ? cartQtt - 1 : actualQtt
        newQtt = newQtt > 0 ? newQtt : 0
        if (newQtt !== cartQtt) {setCartQtt(newQtt)}

        const totalPrice = newQtt * price
        setCartTotalPrice(totalPrice)
        
        const newOrder = formatOrders(restaurant, product, newQtt, actualOrders, 'ProductCard')
        dispatchNewOrder(newOrder)
    }


    useEffect(() => { setQtt() }, [])


    return (
        <Container>
            <InfoContainer>
                <TopContainer>
                    <Name> {name} </Name>
                    {cartQtt > 0 && <OrderQtt> {`${cartQtt < 10 ? `0${cartQtt}` : cartQtt} • ${totalPriceFormat}`} </OrderQtt>}
                </TopContainer>

                <Description> {description} </Description>
                
                <BottomContainer>
                    <Price> {priceFormat} </Price>

                    <AddToCartContainer>
                        <QttButton onClick={() => {setQtt('subtract')}}> - </QttButton>
                        <QuantityInput> {cartQtt} </QuantityInput>
                        <QttButton onClick={() => {setQtt('add')}} > + </QttButton>
                    </AddToCartContainer>
                </BottomContainer>
            </InfoContainer>

            {photoUrl && <ImgContainer photoUrl={photoUrl} />}
        </Container>
    )
}