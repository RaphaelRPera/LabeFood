// Para adicionar o HeaderTop á uma página, é necessário
// que a página passe duas 'props' para o HeaderTop:
//   - props 'title': o texto do título Ex: 'FuterEats', 'Perfil', 'Restaurante', '', etc.
//   - props 'backButton': 'true' para aparecer na tela e 'false' para não aparecer


import React from 'react'
import { useHistory } from 'react-router-dom'
import { BackButton, Header, Title, TitleIn } from './styled'


export const HeaderTop = (props) => {
    const history = useHistory()

    return(
        <Header>
            {props.backButton ? 
                <BackButton onClick={()=>history.goBack()}> {'<'} </BackButton> :
                <BackButton/>
            }
            <Title>
                <TitleIn> {props.title} </TitleIn>
            </Title>
        </Header>
    )
}