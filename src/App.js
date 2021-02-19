import React, {useState } from 'react';
import './App.css';
import Router from './router/Router';


function App() {
  //função passada via props para o ProductCard.js e estado controlado por ela
  const [orderData, setOrderData] = useState({restaurant: {}, products:[]})

  const formatOrders = (restaurant, product, qtde) => {
    const restaurantData = {
      id: restaurant.id,
      name: restaurant.name,
      address: restaurant.address,
      shipping: restaurant.shipping,
      deliveryTime: restaurant.deliveryTime,
    }
    let productOrder = {...product, orderQtde: qtde}

    if (qtde > 0) {
      let newProducts = orderData.products.map(prod=>{
          return prod.id === productOrder.id ? prod = {...prod, orderQtde: qtde} : prod
      })

      const filterProducts = newProducts.filter(prod=>{
          return prod.id === productOrder.id
      })

      if (filterProducts.length <= 0) {
          newProducts = [...newProducts, productOrder]
      }

      setOrderData({restaurant: restaurantData, products: newProducts})
    } else if (qtde <= 0) {
      const newProducts = orderData.products.filter(prod=>{
        return prod.id !== productOrder.id
      })
      setOrderData({restaurant: restaurantData, products: newProducts})
    }
  }
  //-------------------------


  return (
    <div className="App">
      <Router formatOrders={formatOrders} orderData={orderData} setOrderData={setOrderData} />
    </div>
  );
}

export default App;
