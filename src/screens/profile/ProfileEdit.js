import React, { useEffect } from 'react';
import { HeaderTop } from '../../components/HeaderTop/HeaderTop';
import axios from 'axios';
import { baseUrl } from '../../constants/axiosConstants';
import useForm from '../../hooks/useForm';
import { Text, InputContainer, Input, ButtonContainer, Button, Container } from './styled'
import { useHistory } from 'react-router-dom';
import { goToProfile } from '../../router/GoToPages';
import { useProtectPage } from '../../hooks/useProtectPage';

const ProfileEdit = () => {
    useProtectPage()
    const history = useHistory()
    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }

    const getProfile = () => {
      axios.get(`${baseUrl}/profile`, headers)
      .then((response) => {
        console.log(response)
        localStorage.setItem("name", response.data.user.name)
        localStorage.setItem("email", response.data.user.email)
        localStorage.setItem("cpf", response.data.user.cpf)
      })
      .catch((error) => {
        console.log(error)
      })
    }   

    const {form, onChange}  = useForm({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        cpf: localStorage.getItem("cpf")
    })
    

    const handleInputChange = (event) =>{
        const { name, value } = event.target
        onChange(name, value)
    }
      
    const updateProfile = () => {
        const body = {
            name: `${form.name}`,
            email: `${form.email}`,
            cpf: `${form.cpf}`
        }

        axios.put(`${baseUrl}/profile`, body, headers)
        .then((response) => {
            console.log(response)
            alert("Dados atualizados com sucesso!")
            goToProfile(history)
        })
        .catch((error) => {
            console.log(error)
            alert("Erro ao atualizar dados. Tente novamente!")
        })
    }
    
    const handleSubmittion = (event) =>{
        event.preventDefault()
        updateProfile()  
    }

    useEffect(() => {
        getProfile()      
    }, [])

    return (
        <Container className="App">
            <HeaderTop backButton={true} title={"Editar"} />
            <form onSubmit={handleSubmittion} autoComplete="off">
                <InputContainer>
                    <Input placeholder=" Nome" name="name" value={form.name} required type="text"  onChange={handleInputChange}/>
                </InputContainer>                
                <InputContainer>
                    <Input placeholder=" Email" name="email" value={form.email} required type="email" onChange={handleInputChange}/>
                </InputContainer>
                <InputContainer>
                    <Input placeholder=" CPF" name="cpf" value={form.cpf} required type="text" pattern={"[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"}  onChange={handleInputChange}/>
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

export default ProfileEdit;