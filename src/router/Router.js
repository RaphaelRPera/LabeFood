import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from '../screens/home/Home'
import SignUp from "../screens/login/SignUp"
import Busca from "../screens/home/Busca"
import Address from "../screens/login/Address"
import Restaurant from "../screens/restaurant/RestaurantPage"
import Cart from "../screens/cart/Cart"
import Profile from "../screens/profile/Profile"
import ProfileEdit from "../screens/profile/ProfileEdit"
import ProfileEditAddress from "../screens/profile/ProfileEditAddress"
import Login from "../screens/login/Login"
import React from 'react';
import HomeScreen from "../screens/homeScreen/HomeScreen"
import Footer from "../components/Footer/Footer"

function Router(props) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/home'>
            <Home/>
            <Footer/>
          </Route>
          
          <Route exact path='/home/busca'>
            <Busca/>
          </Route>

          <Route exact path='/login'>
            <Login/>
          </Route>

          <Route exact path='/'>
            <HomeScreen/>
          </Route>

          <Route exact path='/cadastrar'>
            <SignUp/>
          </Route>

          <Route exact path='/cadastrar/endereco'>
            <Address/>
          </Route>

          <Route exact path='/restaurante/:id'>
            <Restaurant formatOrders={props.formatOrders} />
          </Route>

          <Route exact path='/carrinho'>
            <Cart orderData={props.orderData} formatOrders={props.formatOrders} setOrderData={props.setOrderData} />
            <Footer/>
          </Route>

          <Route exact path='/perfil'>
            <Profile/>            
            <Footer/>
          </Route>

          {/* Alterei rota para a página de edição dos dados pessoais */}
          <Route exact path='/perfil/editar/dados-pessoais'>
            <ProfileEdit/>
          </Route>
          
          <Route exact path='/perfil/editar/endereco'>
            <ProfileEditAddress/>
          </Route>

          {/* Adicionei rota para a página de erro */}
          <Route>
            <div>ERRO 404 - Página não encontrada</div>
          </Route>

        </Switch>
      </BrowserRouter>
    )
  }
  
  export default Router;

