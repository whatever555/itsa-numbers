import React from 'react'

import { render } from '@testing-library/react'

import { Calculator, performCalculation } from '..'
import { Homepage } from '../'

describe('Homepage', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Homepage />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('page renders ok with values', () => {
    const { getByTestId } = render(<Homepage numA={0} numB={4} />, {})

    const numAInput = getByTestId('numA') as HTMLInputElement
    const numBInput = getByTestId('numB') as HTMLInputElement
    expect(numAInput.value).toBe('0')
    expect(numBInput.value).toBe('4')
  })
})

describe('Calculator', () => {
  it('renders ok with values', () => {
    const { getByTestId } = render(<Calculator numA={0} numB={4} />, {})

    const numAInput = getByTestId('numA') as HTMLInputElement
    const numBInput = getByTestId('numB') as HTMLInputElement
    const result = getByTestId('result') as HTMLElement
    expect(numAInput.value).toBe('0')
    expect(numBInput.value).toBe('4')
    expect(result.innerHTML).toBe('RESULT: 1')
  })

  it('performCalculation returns correct result', () => {
    expect(performCalculation(-4, 4, 3)).toBe(2)
  })

  it('performCalculation returns correct results when the same value is used for both numbers', () => {
    expect(performCalculation(4, 4, 3)).toBe(0)
  })

  it('performCalculation returns correct results when both values are below zero', () => {
    expect(performCalculation(-12, -4, 3)).toBe(3)
  })

  it('performCalculation returns correct results when the second value is lower', () => {
    expect(performCalculation(-12, 21, 3)).toBe(11)
  })

  it('performCalculation returns correct results when max number is large', () => {
    expect(performCalculation(-2, 23423423421, 3)).toBe(7807807807)
  })
})
