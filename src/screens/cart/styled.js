import styled from 'styled-components'

export const Main = styled.main`
    /* background-color: lightcoral; */
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
`

export const PageBox = styled.div`
    /* background-color: lightblue; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* width: 360px; */
    /* height: 640px; */
    width: 100%;
    max-width: 750px;
    flex-grow: 1;
    padding: 0 0 69px 0;
`

export const PageBoxSon = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`


export const UserAddressBox = styled.div`
    background-color: #eeeeee;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    height: 76px;
    /* width: 100%; */
    align-self: stretch;
    margin-top: 2px;
`

export const UserAddressLine = styled.p`
    /* background-color: lightgreen; */
    margin: 0;
    :first-child{
        margin-bottom: 8px;
        color: #b8b8b8;
    }
    color: #000000;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`

export const RestAddressBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 16px 0 16px;
    height: 76px;
    /* width: 100%; */
    align-self: stretch;
    margin-bottom: 8px;
`

export const RestAddressLine = styled.p`
    margin: 0;
    margin-bottom: 8px;
    :first-child{color: #5cb646;}
    color: #b8b8b8;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`

export const CardBox = styled.div`
    align-self: stretch;
    padding: 16px;
`

export const EmptyCartMsg = styled.div`
    display:grid;
    place-items: center;
    height: 42px;
    margin-top: 8px;

    opacity: 0.89;
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

export const Freight = styled.div`
    padding: 0 16px;
    display: flex;
    justify-content: flex-end;
    align-self: stretch;
    margin-top: 33px;

    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #000000;
`

export const SubTotal = styled.div`
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    margin-top: 14px;

    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;

    span:nth-child(2){
        font-family: Roboto;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.43px;
        text-align: right;
        color: #5cb646;
    }

`

export const PaymentTitle = styled.div`
    margin: 0 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid #000000;
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    margin-top: 24px;

    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
`

export const PaymentRadioLabel = styled.label`
    /* background-color: lightcoral; */
    margin: 8px 16px 0 16px;
    align-self: flex-start;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 24px;
    min-width: 50vw;

    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
`

export const PaymentRadio = styled.input`
    margin-right: 8px;
    padding: 0;
`

export const ConfirmButton = styled.div`
    margin: 30px 16px 0 16px;
    padding: 12px;
    display: grid;
    place-items: center;
    align-self: stretch;
    cursor: pointer;

    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;

    border-radius: 2px;
    background-color: rgba(92, 182, 70, 0.5);
`



// PAGINA TESTE - CARD QTDE

export const PTPage = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    display:grid;
    place-items: center;
    background-color: rgba(0,0,0,0.5);
`

export const PTBox = styled.div`
    min-width: 200px;
    min-height: 300px;
    border: 1px solid gray;
    background-color: rgb(245,245,245);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
