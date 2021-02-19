import styled from 'styled-components'

export const Main = styled.main`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
`

export const PageBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 360px; */
    /* height: 640px; */
    width: 100%;
    max-width: 750px;
    min-height: 100vh;
    /* padding: 8px 0 69px 0; */
    padding: ${props=> props.activeOrder ? '8px 0 187px 0' : '8px 0 69px 0' }
`

export const SearchBox = styled.div`
    box-sizing: border-box;
    width: 328px;
    height: 56px;
    border-radius: 4px;
    border: solid 1px #b8b8b8;
    display: grid;
    grid-template-columns: 56px 1fr;
    margin-bottom: 8px;
    /* margin-top: 8px; */
`

export const SearchInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 99%;
    border-radius: 0 4px 4px 0;
    border: none;
    padding: 0 0 0 15px;
`

export const SearchIcon = styled.div`
    box-sizing: border-box;
    display: grid;
    place-items: center;
`

export const SearchImg = styled.img`
    width: 24px;
    height: 24px;
`

export const FilterBar = styled.div`
    box-sizing: border-box;
    width: 360px;
    /* height: 42px; */
    /* border: 1px solid black; */
    padding: 12px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    -webkit-scrollbar{display: none;}
    -ms-overflow-style: none;
    scrollbar-width: none;
`

export const FilterButton = styled.div`
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    /* width: 87px; */
    /* height: 18px; */
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: ${props=>props.active ? '#5cb646' : '#000000'} ;

    display: grid;
    place-items: center;
    margin: 0 4px;
    padding: 0 10px;

    cursor: pointer;
`

export const MsgBar = styled.div`
    box-sizing: border-box;
    width: 360px;
    padding: 12px;
    display: grid;
    place-items: center;
`

export const RestRow = styled.div`
    box-sizing: border-box;
    width: 360px;
    /* height: 196px; */
    display: flex;
    justify-content: center;
    margin-top: 8px;
`

export const RestCard = styled.div`
    width: 328px;
    /* height: 188px; */
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    text-align: left;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RestCardImg = styled.img`
    /* width: 328px; */
    width: 100%;
    /* height: 120px; */
    border-radius: 8px 8px 0 0;
`

export const RestCardBottom = styled.div`
    padding: 12px 16px 16px 16px;
    align-self: stretch;
`

export const RestCardName = styled.p`
    margin: 0 0 4px 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
`

export const RestCardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LineSpan = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`


export const CardPopup = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
`

