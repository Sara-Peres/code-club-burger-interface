import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${Background});
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 80%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 80%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 70px;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 25px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  border-radius: 5px 0px 0px 0px;
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  color: #ffffff;
`
