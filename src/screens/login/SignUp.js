import React, { useEffect } from 'react';
import logo1x from '../../img/imgLogin/logo1x.png'
import { useHistory } from 'react-router-dom';
import {PageContainer, Logo, Title, Text, InputContainer, Input, ButtonContainer, Button} from './SignUpStyled'
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { HeaderTop } from '../../components/HeaderTop/HeaderTop';




const SignUp = () => {
  
  const history = useHistory()
  const { form, onChange, resetState } = useForm({
    name:"",
    email:"",
    cpf:"",
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
    handleSignUp()
    resetState()
  }

  const handleSignUp = () => {
    axios
      .post("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup", form)
      .then(response => {
        localStorage.setItem("token", response.data.token)
        history.push("/cadastrar/endereco")
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
  }
  
  return (
      <PageContainer>
        <HeaderTop title={''} backButton={true} />
          <Logo src={logo1x} />
        <Title>
          <Text>Cadastrar</Text>
        </Title>
        <form onSubmit={handleSubmittion} autoComplete="off">
          <InputContainer>
            <Input  name="name" value={form.name} onChange={handleInputChange} required  placeholder=" Nome"/>
          </InputContainer>
          <InputContainer>
           <Input  name="email" value={form.email} onChange={handleInputChange} required placeholder=" Email"/>
         </InputContainer>
         <InputContainer>
            <Input  name="cpf" value={form.cpf} onChange={handleInputChange} required placeholder=" CPF" />
         </InputContainer>
         <InputContainer>
            <Input  name="password" value={form.password}  onChange={handleInputChange} required placeholder=" Senha" type="password"/>
          </InputContainer>
         {/* <InputContainer>
           <Input placeholder=" Confirmar senha" type="password"/>
          </InputContainer> */}
         <ButtonContainer>
            <Button type="submit">
             <Text>Criar</Text>
            </Button>
         </ButtonContainer>
        </form>
      </PageContainer>
    );
  }
  
  export default SignUp;