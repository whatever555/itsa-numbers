import React from 'react'
import { CalculatorProps, Homepage } from '../components/Pages/Homepage'
import { DefaultLayout } from '../layouts/defaultLayout'

export const Home = (props: CalculatorProps): JSX.Element => (
  <DefaultLayout>
    <Homepage {...props} />
  </DefaultLayout>
)

Home.getInitialProps = ({ query: { numB, numA } }) => {
  return { numB, numA }
}
export default Home
