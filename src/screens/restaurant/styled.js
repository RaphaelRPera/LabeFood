import styled from 'styled-components'
import { primary, secundary, neutral } from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
`

export const RestaurantContainer = styled.div`
    /* background-color: rgba(170, 100, 50, .1); */
    width: 328px;
    height: 250px;
   
    text-align: start;
    padding-top: 20px;
`

export const ImageContainer = styled.div`
    width: 328px;
    height: 120px;
    object-fit: contain;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;
`
export const Name = styled.h5`
    width: 328px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${primary};
    
    margin: 0;
    padding: 10px 0;
`
export const Text = styled.p`
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${neutral};   

    margin: 0;
    padding: 0 20px 10px 0;
`
export const Info = styled.div`
    /* background-color: yellow; */

    display: flex;

    margin: 0;
`

export const ProductContainer = styled.div`
    /* background-color: yellow;  */

    text-align: start;
    padding-bottom: 15px;  
`

export const SectionTitle = styled.p`
    width: 328px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${secundary};

    margin: 0;
    padding-bottom: 10px;
    border-bottom: solid 1px black;
`


export const QuantityPage = styled.div`
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    justify-content: center;
    padding-top: calc(50vh - 108px);
    position: fixed;
    top: 0;
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