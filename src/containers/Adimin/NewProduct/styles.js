import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #ffffff;
`

export const Input = styled.input`
  height: 40px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-width: 280px;
  padding-left: 10px;
`
export const ButtonStyles = styled(Button)`
  width: 100%;
`
export const LabelUpLoad = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  padding: 10px;
  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`
