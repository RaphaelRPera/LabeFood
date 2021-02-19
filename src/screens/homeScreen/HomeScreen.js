import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import logo1x from '../../img/logo1x.png'
import { goToLogin } from '../../router/GoToPages';

const ScreenPage = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  /* width: 360px;
  height: 640px; */
  width: 100%;
  min-height: 100vh;
  background-color:#000000;
  
`
const Logo = styled.img`
  width: 126px;
  height: 65px;

`

const  HomeScreen = () => {

  const history = useHistory()

  setTimeout(function(){
    goToLogin(history)
  }, 2000)
    return (
      <ScreenPage>
        <Logo src={logo1x} />
      </ScreenPage>
    );
  }
  
  export default HomeScreen;
