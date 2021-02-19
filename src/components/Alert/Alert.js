import React from 'react'
import { BiTime } from "react-icons/bi";
import {Container, TextOne, TextTwo, TextThree, ContainerText, ContainerLogo} from './Styled'


const Alert = (props) => {
    return(
            <Container>
                <ContainerLogo>
                    <BiTime size="32px" color="white"/>
                </ContainerLogo>
                <ContainerText>
                    <TextOne>Pedido em andamento</TextOne>
                    <TextTwo> {props.activeOrder.restaurantName} </TextTwo>
                    <TextThree> {`SUBTOTAL R$${props.activeOrder.totalPrice.toFixed(2).replace('.', ',')}`} </TextThree>
                </ContainerText>
            </Container>
    )
}
export default Alert