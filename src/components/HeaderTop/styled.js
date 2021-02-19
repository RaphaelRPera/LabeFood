import styled from 'styled-components'


export const Header = styled.header`
    box-sizing: border-box;
    width: 100%;
    max-width: 750px;
    height: 64px;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    padding: 20px 0 0 0;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: #ffffff;

    display: grid;
    grid-template-columns: 30px 1fr 30px;
`

export const BackButton = styled.span`
    width: 100%;
    font-weight: bold;
    font-size: 16px;
    display: grid;
    place-items: center;
    cursor: pointer;
    :hover{background-color: rgb(245,245,245);}
`

export const Title = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
`

export const TitleIn = styled.span`
    box-sizing: border-box;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
`