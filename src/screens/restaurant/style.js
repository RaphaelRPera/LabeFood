import styled from 'styled-components'


export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
`

export const Container = styled.div`
    width: 100%;
    max-width: 400px;
`

export const Name = styled.div`
    color: white;
    font-weight: bold;
    font-size: calc(16px + 1vw);
    font-size: 26px;
`

export const ImgContainer = styled.div`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 228px;
    height: 200px;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
`


export const InfoContainer = styled.div`
    text-shadow: 1px 2px 2px rgba(70,70,70,1);
    background-image: linear-gradient(to top, rgba(50,50,50,0.6), rgba(50,50,50,0.0));
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
`


export const CategoryContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 10px 10px 10px;
`

export const CategoryItem = styled.div`
    margin-right: 10px;
    :last-child{margin-right: 0}
    font-size: 14px;
`

export const Address = styled.div`
    padding: 0 10px 15px 10px;
    border-bottom: 2px solid rgba(90,90,90,0.2);
    font-size: 14px;
`

export const ShippingContainer = styled.div`
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Shipping = styled.div`

`

export const Delivery = styled.div`

`

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 30px 10px;
`

export const Title = styled.h2`

`