import React from 'react'
import styled from 'styled-components'
import image from './assets/images/test-image.jpg'
import ClickCounter from './ClickCounter'

const AppStyled = styled.div`
  color: red;
  display: flex;
`

export const App = () => {
  const num;
  const checkHusky = "frjif"
  return (
    <AppStyled>
      <img src={image} alt="test" />
      <h1>
        {' '}
        Edit5 React TypeScript Webpack Starter Template - {process.env.NODE_ENV}
      </h1>
      <ClickCounter />
    </AppStyled>
  )
}
