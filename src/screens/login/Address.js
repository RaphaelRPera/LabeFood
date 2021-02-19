import React, { useEffect } from 'react';
import {PageContainer, Title, Text, InputContainer, Input, ButtonContainer, Button} from './AddressStyled'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { HeaderTop } from '../../components/HeaderTop/HeaderTop';
import { useProtectPage } from '../../hooks/useProtectPage';

const Address = () => {
  useProtectPage()
  const history = useHistory()
  const { form, onChange, resetState } = useForm({
    street:"",
    number:"",
    neighbourhood:"",
    city:"",
    state:"",
    complement:""
  })
  
  const handleInputChange = (event) =>{
    const { name, value } = event.target
    onChange(name, value)
  } 

  const handleSubmittion = (event) =>{
    event.preventDefault()
    resetState()
    handleAddress()
  }

  
  const handleAddress = () => {
    const token = window.localStorage.getItem("token")
      axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address", form, {headers:{
          auth: token
        }}).then(response => {
          history.push("/home")
          localStorage.setItem("token", response.data.token)
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
  }
  
  return (
      <PageContainer>
        <HeaderTop title={''} backButton={true} />
        <Title>
          <Text>Meu endereço</Text>
        </Title>
        <form onSubmit={handleSubmittion} autoComplete="off">
         <InputContainer>
           <Input name="street" value={form.street} onChange={handleInputChange} required placeholder="Logradouro"/>
         </InputContainer>
         <InputContainer>
           <Input name="number" value={form.number} onChange={handleInputChange} required placeholder="Número" type="number"/>
         </InputContainer>
         <InputContainer>
           <Input name="complement" value={form.complement} onChange={handleInputChange}  placeholder="Complemento"/>
         </InputContainer>
         <InputContainer>
           <Input name="neighbourhood" value={form.neighbourhood} onChange={handleInputChange} required placeholder="Bairro"/>
         </InputContainer>
         <InputContainer>
           <Input name="city" value={form.city} onChange={handleInputChange} required placeholder="Cidade"/>
         </InputContainer>
         <InputContainer>
           <Input name="state" value={form.state} onChange={handleInputChange} required placeholder="Estado"/>
         </InputContainer>
         <ButtonContainer>
           <Button type="submit">
             <Text>Salvar</Text>
           </Button>
         </ButtonContainer>
        </form>
      </PageContainer>
    );
  }
  
  export default Address;