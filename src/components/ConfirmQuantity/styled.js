import styled from 'styled-components'
import { primary, secundary, neutral } from '../../constants/colors'

export const QuantityPage = styled.div`
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    justify-content: center;
    padding-top: calc(50vh - 108px);
    position: fixed;
    top: 0;
    z-index: 30;
`

export const QuantityContainer = styled.div`
    width: 328px;
    height: 216px;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const QuantityText = styled.p`
    width: 296px;
    height: 18px;
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
export const QuantitySelect = styled.select`
    width: 296px;
    height: 56px;
    border-radius: 4px;
    border: solid 1px ${neutral};
`

export const QuantityButton = styled.button`
    background-color: transparent;
    border: none;

    width: 200px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #5cb646;

    align-self: flex-end;
    margin-right: 10px;
`