import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import logo1x from '../../img/imgLogin/logo1x.png';
import { goToSignUp } from '../../router/GoToPages';
import {PageContainer, Logo, Title, Text, InputContainer, Input, ButtonContainer, Button, ButtonOnClick} from './LoginStyled'


const Login = () => {
  const history = useHistory()
  const {form, onChange, resetState}  = useForm({
    email:"",
    password:""
  })

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token) {
      history.push("/home")
    }
  }, [history])
  
  
  const handleInputChange = (event) =>{
    const { name, value } = event.target
    onChange(name, value)
  }
  
  const handleSubmittion = (event) =>{
    event.preventDefault()
    handleLogin()
    resetState()
  }
  
  const handleLogin = () => {
    axios
      .post("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login", form)
      .then(response => {
        localStorage.setItem("token", response.data.token)
        history.push("/home")
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
  }

    return (
      <PageContainer>
        <Logo src={logo1x} />
        <Title>
          <Text>Entrar</Text>
        </Title>
        <form onSubmit={handleSubmittion} autoComplete="off">
          <InputContainer>
            <Input placeholder=" Email" name="email" value={form.name} required onChange={handleInputChange}/>
          </InputContainer>
          <InputContainer>
            <Input placeholder=" Senha" name="password" value={form.password} required type="password"  onChange={handleInputChange}/>
          </InputContainer>
          <ButtonContainer>
            <Button type="submit">
              <Text>Entrar</Text>
            </Button>
          </ButtonContainer>
        </form>
        <Title>
          <Text>Não possui cadastro?<ButtonOnClick onClick={() => goToSignUp(history)}>Clique aqui.</ButtonOnClick></Text>
        </Title>
      </PageContainer>
    );
  }
  
  export default Login;
