import * as React from 'react'

import { render, screen } from 'support/test-utils'

import { NewFeedsManagerView } from './NewFeedsManagerView'

const { getByTestId, getByText } = screen

describe('NewFeedsManagerView', () => {
  it('renders with initial values', () => {
    const handleSubmit = jest.fn()

    render(<NewFeedsManagerView onSubmit={handleSubmit} />)

    expect(getByText('Register Feeds Manager')).toBeInTheDocument()
    expect(getByTestId('feeds-manager-form')).toHaveFormValues({
      name: 'Plugin Feeds Manager',
      uri: '',
      publicKey: '',
    })
  })
})
