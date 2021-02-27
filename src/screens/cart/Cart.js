import React, { useEffect, useState } from 'react';
import { HeaderTop } from '../../components/HeaderTop/HeaderTop';
import { UserAddressBox, UserAddressLine, EmptyCartMsg, Freight, Main, PageBox, SubTotal, PaymentTitle, PaymentRadio, PaymentRadioLabel, ConfirmButton, PageBoxSon, CardBox, RestAddressBox, RestAddressLine } from './styled';
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../router/GoToPages';
import { useProtectPage } from '../../hooks/useProtectPage';
import { useSelector, useDispatch } from 'react-redux'
import { setActiveOrder, setOrders } from '../../store/Orders/Orders.actions'


function Cart() {
    useProtectPage()
    const history = useHistory()

    const dispatch = useDispatch()

    const [userAddress, setUserAddress] = useState('')
    const [paymentMethod, setPaymentMethod] = useState(false)
    const [submitting, setSubmitting] = useState(false)


  //=========================================================================
    const actualOrders = useSelector(state => state.orders)

    const order = actualOrders && actualOrders[0]

    const {orders, restaurantOrder} = order && order
    const orderProducts = orders && orders
    
    const {address, categories, deliveryTime, id, logoUrl, name, products} = restaurantOrder ? restaurantOrder : 0
    
    const shipping = restaurantOrder ? restaurantOrder.shipping : 0
    const shippingFormat = shipping.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
  //======================================================================


  //=========================================================================
    let totalPrice = order && shipping

    orderProducts && orderProducts.forEach(prod => {
        totalPrice += (prod.price * prod.qtt)
    });

    const totalPriceFormat = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  //======================================================================


  //=========================================================================
    const user = useSelector(state => state.user)
    const {street, number, district} = user && user.address

    const getUserAddress = () => {
        user ? setUserAddress(`${street}, ${number} - ${district}`) : setUserAddress(0)
    }
  //======================================================================


  //=========================================================================
    const handleSubmit = () => {
      if (orderProducts) {
          if (!paymentMethod) {
              window.alert('Escolha a forma de pagamento antes de Confirmar a compra')
          } else {
              setSubmitting(true)
              setTimeout(() => {
                  order && dispatch(setActiveOrder(order))
                  order && dispatch(setOrders(0))
                  setSubmitting(false)
                  window.alert('Recebemos seu pedido')
                  goToHomePage(history)
              }, 4000)
          }
      } else {
          window.alert('Adicione alguns produtos ao carrinho')
      }
    }
  //======================================================================


    const onChangeRadioButton = (event) => {
        setPaymentMethod(event.target.value)
    }

    useEffect(()=>{ getUserAddress() },[userAddress])


  //=========================================================================
    const restaurantAddress = address ?
        <RestAddressBox>
            <RestAddressLine> {`${name} - ${address.split(' - ')[1]}`} </RestAddressLine>
            <RestAddressLine> {address} </RestAddressLine>
            <RestAddressLine> { `${deliveryTime} min`} </RestAddressLine>
        </RestAddressBox>
      :
        <EmptyCartMsg> <span> Carrinho vazio </span> </EmptyCartMsg>
  //======================================================================


  //=========================================================================
    const productCards = orderProducts &&
        orderProducts.map(prod => {
            return (
                <ProductCard 
                    key={prod.id}
                    product={prod}
                    restaurant={restaurantOrder}
                />
          )
        })
  //======================================================================


      return (
          <Main>
              <HeaderTop title={'Meu Carrinho'} backButton={false} />
              <PageBox>
                  <PageBoxSon>
                      <UserAddressBox>
                          <UserAddressLine>Endereço de entrega</UserAddressLine>
                          <UserAddressLine>{userAddress}</UserAddressLine>
                      </UserAddressBox>
                      
                      {restaurantAddress}

                      <CardBox> {productCards} </CardBox>
                      
                      <Freight> <span> {`Frete ${shippingFormat}`} </span> </Freight>

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
                      <ConfirmButton onClick={handleSubmit} submitting={submitting}>
                          {!submitting ? 'Enviar' : 'Aguarde...'}
                      </ConfirmButton>
                  </PageBoxSon>
              </PageBox>
          </Main>
      )
  }
  
  export default Cart;
