import styled from 'styled-components'

export const Header = () => (
  <Wrapper>
    <H1>Itsapark</H1>
  </Wrapper>
)

const Wrapper = styled.header`
  width: 100%;
  background-color: #f5624e;
`
const H1 = styled.h1`
  color: #ffe;
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 40px;
  @media (min-width: 500px) {
    font-size: 80px;
    padding: 60px;
  }
`
