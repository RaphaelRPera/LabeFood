import styled from "styled-components"


export const PageContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
`

export const Text = styled.text`
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
export const Title = styled.div`
  width: 360px;
  height: 42px;
  margin-top:16px;
`

export const InputContainer = styled.div`
  width: 360px;
  height: 72px;
`
export const Input = styled.input`
  width: 328px;
  height: 50px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
`
export const ButtonContainer = styled.div`
  width: 360px;
  height: 42px;
`

export const Button = styled.button`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #5cb646;
  border: none;
`

export const BackButton = styled.button`
  display:flex;
  width: 23px;
  height: 24px;
  background:none;
  border:none;
  margin-top:20px;
`