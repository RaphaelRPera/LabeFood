import React, { useEffect } from 'react';
import { HeaderTop } from '../../components/HeaderTop/HeaderTop';
import axios from 'axios';
import { baseUrl } from '../../constants/axiosConstants';
import useForm from '../../hooks/useForm';
import { Text, InputContainer, Input, ButtonContainer, Button, Container } from './styled'
import { useHistory } from 'react-router-dom';
import { goToProfile } from '../../router/GoToPages';
import { useProtectPage } from '../../hooks/useProtectPage';

const ProfileEditAddress = () => {
    useProtectPage()
    const history = useHistory()
    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }
    
    const getAddress = () => {
      axios.get(`${baseUrl}/profile/address`, headers)
      .then((response) => {
        console.log(response)
    
        localStorage.setItem("street", response.data.address.street)
        localStorage.setItem("number", response.data.address.number)
        localStorage.setItem("neighbourhood", response.data.address.neighbourhood)
        localStorage.setItem("city", response.data.address.city)
        localStorage.setItem("state", response.data.address.state)
        localStorage.setItem("complement", response.data.address.complement)
        
      })
      .catch((error) => {
        console.log(error)
      })
    }

    useEffect(() => {
        getAddress()
    }, [])    

    const { form, onChange } = useForm({
        street: localStorage.getItem("street"),
        number: localStorage.getItem("number"),
        neighbourhood: localStorage.getItem("neighbourhood"),
        city: localStorage.getItem("city"),
        state: localStorage.getItem("state"),
        complement: localStorage.getItem("complement")
    })
        
    const updateProfile = () => {
        const body = {
            street: form.street,
            number: form.number,
            neighbourhood: form.neighbourhood,
            city: form.city,
            state: form.state,
            complement: form.complement
        }

        axios.put(`${baseUrl}/address`, body, headers)
        .then((response) => {
            console.log(response)
            alert("Endereço atualizados com sucesso!")
            localStorage.removeItem("street", "number", "neighbourhood", "city", "state")
            goToProfile(history)
        })
        .catch((error) => {
            console.log(error)
            alert("Erro ao atualizar endereço. Tente novamente!")
        })
    }

    const handleInputChange = (event) =>{
        const { name, value } = event.target
        onChange(name, value)
    }
      
    const handleSubmittion = (event) =>{
        event.preventDefault()
        updateProfile()
        
    }

    return (
        <Container className="App">
            <HeaderTop backButton={true} title={"Editar"} />
            <form onSubmit={handleSubmittion} autoComplete="off">
                <InputContainer>
                    <Input name="street" value={form.street} onChange={handleInputChange} required placeholder="Logradouro" />
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
        </Container>
    );
}

export default ProfileEditAddress;