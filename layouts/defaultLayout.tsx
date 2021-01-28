import React from 'react'
import styled from 'styled-components'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const DefaultLayout = ({ children }: { children: JSX.Element }) => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

const Wrapper = styled.div`
  font-family: 'Arial Bold', sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #f4f1ea;
  * {
    box-sizing: border-box; 
  }
`
const Main = styled.main`
  width: 100%;
  flex: 1;
  align-self: stretch;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`
