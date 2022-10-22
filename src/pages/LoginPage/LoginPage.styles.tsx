import styled from 'styled-components'

export const LoginPageStyled = styled.div`
  font-family: 'Lato', sans-serif;
  background-color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h2 {
    font-weight: bold;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 10px;
  }

  .login__form-wrapper {
    width: 500px;
    height: min-content;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .form-login {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  .form-validation {
    color: red;
  }
`
