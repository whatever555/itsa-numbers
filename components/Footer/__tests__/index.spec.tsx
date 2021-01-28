import React from 'react'

import { render } from '@testing-library/react'

import { Footer } from '../'

describe('Footer', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
