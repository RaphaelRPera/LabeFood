import styled from 'styled-components'
import addCartIcon from '../../img/add-cart-40.png'



export const Container = styled.div`
    padding: 16px 0;
    display: grid;
    grid-template-columns: auto 88px;
    align-items: center;

    border-bottom: 1px solid rgba(70,70,70,0.3);
    :last-child{border-bottom: none;};
    :only-child{
        border-bottom: 1px solid rgba(70,70,70,0.3);
        border-top: 1px solid rgba(70,70,70,0.3);
    };

    user-select: none;
`

export const InfoContainer = styled.div`
    display: grid;
    row-gap: 10px;
    margin-right: 10px;
`

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const OrderQtt = styled.div`
    font-size: 14px;
    color: #47c727;
    padding-right: 10px;
    word-spacing: 5px;
`

export const Name = styled.p`
    margin: 0;
    font-size: 16px;
`

export const Description = styled.p`
    margin: 0;
    color: rgb(80,80,80);
    font-size: 14px;

`

export const Price = styled.p`
    margin: 0;
    font-size: 14px;
`


export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


// export const AddButton = styled.div`
//     padding: 3px 5px;
//     cursor: pointer;
//     font-size: 14px;
//     color: #5cb646;
//     border: 1px solid white;
//     border-radius: 5px;

//     transition: 0.1s;
//     :hover{
//         border: 1px solid #5cb646;
//         background-color: #5cb646;
//         color: white;
//     }

//     :active{
//         border: 1px solid #5cb646;
//         background-color: white;
//         color: #5cb646;
//     }
// `

export const AddToCartContainer = styled.div`
    display: flex;
    align-items: stretch;
    border: 1px solid rgba(150,150,150,0.3);
    border-radius: 5px;
    padding: 2px;
`


export const QttButton = styled.div`
    padding: 1px 7px;
    cursor: pointer;
    font-size: 16px;
    color: #5cb646;
    border-radius: 6px;
    border: 1px solid transparent;
    font-weight: bold;

    :hover{
        /* background-color: rgba(92, 182, 70, 0.1); */
        background-color:  #5cb646;
        color: white;
        border-color: #5cb646;
    };
    :active{
        background-color: rgba(92, 182, 70, 0.1);
        color: #5cb646;
        border-color: rgba(92, 182, 70, 0.4);
    }
`


export const QuantityInput = styled.div`
    margin: 0 3px;
    width: 30px;
    /* border: 1px solid black; */
    display: grid;
    place-items: center;
    font-size: 14px;
    color: rgb(80,80,80);
`




export const ImgContainer = styled.div`
    background-image: url(${props => props.photoUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 88px;
    width: 88px;
`


