import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrders } from '../../../store/Orders/Orders.actions'
import { useFormatOrders } from '../../../hooks/useFormatOrder'
import { AddButton, AddToCartContainer, BottomContainer, Container, Description, ImgContainer, InfoContainer, Name, OrderQtt, Price, QttButton, QuantityInput, TopContainer } from './style'


export const ProductCard = (props) => {
    const {restaurant, product} = props
    const {id, name, photoUrl, description, price, categories} = product
    const priceFormat = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    const [cartQtt, setCartQtt] = useState(0)
    const [cartTotalPrice, setCartTotalPrice] = useState(0)
    const totalPriceFormat = cartTotalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })


    const setQtt = (type) => {
        let newQtt = type === 'add' ? cartQtt + 1 : cartQtt - 1
        newQtt = newQtt > 0 ? newQtt : 0
        setCartQtt(newQtt)
        const totalPrice = newQtt * price
        setCartTotalPrice(totalPrice)
    }


    const dispatch = useDispatch()
    const newOrder = useFormatOrders(restaurant, product, cartQtt)

    useEffect(() => {
        if (newOrder === 'Other active order') {
            window.alert('Existe um pedido de outro restaurante ativo. Aguarde sua conclusão')
            setCartQtt(0)
        } else {
            dispatch(setOrders(newOrder))
        }
    }, [cartQtt])

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