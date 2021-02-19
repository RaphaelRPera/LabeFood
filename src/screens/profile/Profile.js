import React, { useState, useEffect } from 'react';
import {ContainerInfo, Div, Cadastro, CardContainer, Title, TextOrder, TextValue, ContainerPage, History, Image, TextInfo, TextAddress, Info} from "./styled"
import editPng from "./img/edit.png"
import { goToProfileEdit, goToProfileEditAddress } from '../../router/GoToPages';
import { useHistory } from 'react-router-dom';
import { HeaderTop } from '../../components/HeaderTop/HeaderTop';
import axios from 'axios';
import { baseUrl } from '../../constants/axiosConstants';
import { useProtectPage } from '../../hooks/useProtectPage';


const Profile = () => {
  useProtectPage()
  const history = useHistory()
  const token = localStorage.getItem("token")
  const headers = { headers: { auth: token } }
  const [ profileInfo, setProfileInfo ] = useState({})
  const [ orders, setOrders ] = useState([])

  const getProfile = () => {
    axios.get(`${baseUrl}/profile`, headers)
    .then((response) => {
      console.log(response)
      setProfileInfo(response.data.user)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getOrders = () => {
    axios.get(`${baseUrl}/orders/history`, headers)
    .then((response) => {
      console.log(response)
      setOrders(response.data.orders)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getProfile()
    getOrders()
  }, [])

  const renderOrders = () => {
    if (orders.length > 0) {
      return (
        orders.map((order) => {
          return ( 
            <CardContainer key={order.createdAt} > 
              <Title> {order.restaurantName} </Title>
              <TextOrder> {(new Date(order.createdAt).toLocaleDateString('pt-BR', {day:'numeric', month: 'long', year: 'numeric'}))} </TextOrder> 
              <TextValue> SUBTOTAL R${order.totalPrice} </TextValue>
            </CardContainer>
          )
        })
      )
    } else {
      return (
        <div>Você não realizou nenhum pedido</div>
      )
    }
  }

  return (
    <div>
      <HeaderTop backButton={false} title={"Meu Perfil"} />          
      <ContainerPage>
        <ContainerInfo>
          <Info>
            <TextInfo> {profileInfo.name} </TextInfo>
            <TextInfo> {profileInfo.email} </TextInfo>
            <TextInfo> {profileInfo.cpf} </TextInfo>
          </Info>            
          <Div>
            <Image src={editPng} onClick={() => goToProfileEdit(history)} />
          </Div>
        </ContainerInfo>        

        <Cadastro>
          <ContainerInfo>
            <Info>        
              <TextAddress>Endereço cadastrado </TextAddress>
              <TextInfo> {profileInfo.address} </TextInfo>
            </Info>
            <Div>
              <Image src={editPng} onClick={() => goToProfileEditAddress(history)} />
            </Div>
          </ContainerInfo>
        </Cadastro>
            
          <History>Histórico de pedidos</History>

          {renderOrders()}
      </ContainerPage>
    </div>

  );
}
  
export default Profile;
