import styled from 'styled-components'

export const Container = styled.div`
    width: 100%; 
    height: 120px;

    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const CardContainer = styled.div`
    /* width: 328px; */
    width: 100%;
    height: 112px;

    border-radius: 8px;
    border: solid 1px #b8b8b8;

    display: flex;
    justify-content: space-between;
`

export const ImageContainer = styled.img`
    width: 27%;
    max-width: 96px;
    height: 100%;

    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
`

export const ContantContainer = styled.div`
    width: 73%;

    padding: 15px;

    position: relative;
`

export const ProductTitle = styled.p`
    width: 167px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;

    text-align: start;
    padding-bottom: 10px;
    margin: 0;
`
export const ProductDescription = styled.p`
    width: 200px;
    height: 30px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;

    text-align: start;
    margin: 0;
    padding-bottom: 10px;
`

export const ProductValue = styled.p`
    width: 118px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;

    text-align: start;
    margin: 0;

`

export const QuantityButton =  styled.button`
    width: 33px;
    height: 33px;
    background-color: transparent;
    border: solid 1px #5cb646;

    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    color: #5cb646;

    position: absolute;
    top: -1px;
    right: -1px;

    visibility: ${props => props.visibility};
`

export const AddButton =  styled.button`
    width: 90px;
    height: 31px;
    background-color: transparent;
    border: solid 1px ${props => props.borderColor};


    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: ${props => props.color};

    position: absolute;
    bottom: -1px;
    right: -1px;
    outline: none;
`