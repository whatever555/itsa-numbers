
import React from 'react'

import { render } from '@testing-library/react'

import { Header } from '../'

describe('Header', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Header />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
