import styled from "styled-components"

export const Container = styled.div`
    /* width: 360px; */
    width: 100%;
    height: 118px;
    /* background-color: #5cb646; */
    background-color: rgba(92, 182, 70, 0.97);
    position: fixed;
    bottom: 49px;
    display: grid;
    grid-template-columns: 80px 1fr;
`
export const TextOne = styled.text`
    width: 256px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #ffffff;
    text-align: left;
    /* background-color: lightcyan; */
`
export const TextTwo = styled.text`
    width: 256px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    text-align: left;
    margin-top: 8px;
    /* background-color: lightcoral; */
`
export const TextThree = styled.text`
    width: 256px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    text-align: left;
    margin-top: 8px;
    /* background-color: lightblue; */
`

export const ContainerLogo = styled.div`
    display:grid;
    place-items: center;
    /* padding-top:40px;
    padding-left:30px; */
    /* background-color: lightgray; */
`
export const ContainerText = styled.div`
    /* display:grid;
    margin-top:-45px;
    padding-left: 35px;
    gap:5px; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`