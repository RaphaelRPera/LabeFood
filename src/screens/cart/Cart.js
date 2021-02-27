import React, { useEffect, useState } from 'react';
import { HeaderTop } from '../../components/HeaderTop/HeaderTop';
import { UserAddressBox, UserAddressLine, EmptyCartMsg, Freight, Main, PageBox, SubTotal, PaymentTitle, PaymentRadio, PaymentRadioLabel, ConfirmButton, PageBoxSon, CardBox, RestAddressBox, RestAddressLine } from './styled';
import axios from 'axios'
import { baseUrl } from '../../constants/axiosConstants';
// import ProductCard from '../../components/ProductCard/ProductCard'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../router/GoToPages';
import { useProtectPage } from '../../hooks/useProtectPage';
import { useSelector, useDispatch } from 'react-redux'
import { setOrders } from '../../store/Orders/Orders.actions'


function Cart(props) {
    useProtectPage()
    const history = useHistory()

    const restId = props.orderData.restaurant.id || null
    // const name =  props.orderData.restaurant.name || null
    // const shipping =  props.orderData.restaurant.shipping || null
    // const deliveryTime =  props.orderData.restaurant.deliveryTime || null
    const restAddress =  props.orderData.restaurant.address || null
    // const freightPrice = shipping || 0

    const [userAddress, setUserAddress] = useState('')
    const [paymentMethod, setPaymentMethod] = useState(false)


  //-------------------------------------------------------------------------
    const actualOrders = useSelector(state => state.orders)
    // console.log('Cart: actualOrders:', actualOrders)
    const order = actualOrders && actualOrders[0]

    const {orders, restaurantOrder} = order && order
    const orderProducts = orders && orders
    
    const {address, categories, deliveryTime, id, logoUrl, name, products} = restaurantOrder ? restaurantOrder : 0
    
    // console.log(address)

    const shipping = restaurantOrder ? restaurantOrder.shipping : 0
    const shippingFormat = shipping.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
  //----------------------------------------------------------------------


  //-------------------------------------------------------------------------
    let totalPrice = order && shipping

    orderProducts && orderProducts.forEach(prod => {
      totalPrice += (prod.price * prod.qtt)
    });

    const totalPriceFormat = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  //----------------------------------------------------------------------




    // const calcTotalPrice = () => {
    //   let totalPrice = 0
    //   if (props.orderData) { 
    //     props.orderData.products.map(prod=>{
    //       totalPrice += (prod.price * prod.orderQtde)
    //     })
    //   }
    //     totalPrice += freightPrice
    //     return totalPrice
    // }


    const getFullAddress = () => {
      const token = localStorage.getItem('token')
      const baseHeader = {headers:{auth: token}}
      axios.get(`${baseUrl}/profile/address`, baseHeader)
        .then(response=>{
          setUserAddress(`${response.data.address.street}, ${response.data.address.number}`)
        })
        .catch(err=>{
          // console.log('Cart > getActiveOrder', err)
        })
    }

    const placeOrder = () => {
      if (props.orderData.products.length > 0) {
        if (!paymentMethod) {
          window.alert('Escolha a forma de pagamento antes de Confirmar a compra')
        } else {
          const products = props.orderData.products.map(prod=>{
            return {id: prod.id, quantity: prod.orderQtde}
          })
          const body = {products: products, paymentMethod: paymentMethod}
          const token = localStorage.getItem('token')
          const baseHeader = {headers:{auth: token}}
          axios.post(`${baseUrl}/restaurants/${restId}/order`, body, baseHeader)
            .then(response=>{
              props.setOrderData({restaurant: {}, products:[]})
              goToHomePage(history)
            })
            .catch(err => {
              console.log('placeOrder: ', err)
            })
        }
      }
    }

    const onChangeRadioButton = (event) => {
      setPaymentMethod(event.target.value)
    }

    useEffect(()=>{
      getFullAddress()
    },[])


  //-------------------------------------------------------------------------
    const restaurantAddress = address ?
        <RestAddressBox>
            <RestAddressLine> {`${name} - ${address.split(' - ')[1]}`} </RestAddressLine>
            <RestAddressLine> {address} </RestAddressLine>
            <RestAddressLine> { `${deliveryTime} min`} </RestAddressLine>
        </RestAddressBox>
      :
        <EmptyCartMsg> <span> Carrinho vazio </span> </EmptyCartMsg>
  //----------------------------------------------------------------------


    // const renderRestAddress = () => {
    //   return (props.orderData.restaurant.name && props.orderData.products.length > 0) ?
    //     <RestAddressBox>
    //       <RestAddressLine> {`${name} ${restAddress.split(' - ')[1]}`} </RestAddressLine>
    //       <RestAddressLine> {restAddress} </RestAddressLine>
    //       <RestAddressLine> { `${deliveryTime} min`} </RestAddressLine>
    //     </RestAddressBox>
    //   :
    //   <EmptyCartMsg> <span> Carrinho vazio </span> </EmptyCartMsg>
    // }

  
  //-------------------------------------------------------------------------
    // console.log('Cart: actualOrders:', actualOrders)
    const productCards = orderProducts &&
        orderProducts.map(prod => {
            return (
                <ProductCard 
                key={prod.id}
                product={prod}
                orderQtde={prod.qtt}
                // restaurant={props.orderData.restaurant}
                restaurant={restaurantOrder}
                formatOrders={props.formatOrders}
              />
          )
        })
  //----------------------------------------------------------------------



    // const renderCards = () => {
    //   return props.orderData.products.length > 0 && 
    //     props.orderData.products.map(prod=>{
    //       return (
    //         <ProductCard 
    //           key={prod.id}
    //           product={prod}
    //           orderQtde={prod.orderQtde}
    //           restaurant={props.orderData.restaurant}
    //           formatOrders={props.formatOrders}
    //         />
    //       )
    //     })
    // }

    return (
      <Main>
        <HeaderTop title={'Meu Carrinho'} backButton={false} />
        <PageBox>
          <PageBoxSon>
            <UserAddressBox>
              <UserAddressLine>Endereço de entrega</UserAddressLine>
              <UserAddressLine>{userAddress}</UserAddressLine>
            </UserAddressBox>
            
            {/* {renderRestAddress()} */}
            {restaurantAddress}

            <CardBox>
              {/* {renderCards()} */}
              {/* {console.log(`Cart: render productCards`)} */}
              {productCards}
            </CardBox>
            
            {/* <Freight> <span> {`Frete R$${freightPrice.toFixed(2).replace('.', ',')}`} </span> </Freight> */}
            <Freight> <span> {`Frete ${shippingFormat}`} </span> </Freight>

            {/* <SubTotal> <span>SUBTOTAL</span> <span> {`R$${calcTotalPrice().toFixed(2).replace('.', ',')}`} </span> </SubTotal> */}
            <SubTotal> <span>SUBTOTAL</span> <span> {totalPriceFormat} </span> </SubTotal>

            <PaymentTitle> Forma de pagamento </PaymentTitle>

            <PaymentRadioLabel htmlFor='money' >
              <PaymentRadio onChange={onChangeRadioButton} type='radio' id='money' name='paytype' value='money'/>
              Dinheiro
            </PaymentRadioLabel>

            <PaymentRadioLabel htmlFor='credcard'>
              <PaymentRadio onChange={onChangeRadioButton} type='radio' id='creditcard' name='paytype' value='creditcard'/>
              Cartão de crédito
            </PaymentRadioLabel>
          </PageBoxSon>

          <PageBoxSon>
            <ConfirmButton  onClick={placeOrder} > Confirmar </ConfirmButton>
          </PageBoxSon>
        </PageBox>
      </Main>
    )
  }
  
  export default Cart;
