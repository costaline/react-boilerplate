import { render, screen } from '@testing-library/react'

import { App } from '@@/App'

describe('example', () => {
	it('renders', () => {
		render(<App />)

		const title = screen.getByTestId('title')

		expect(title).toHaveTextContent(/Vite \+ React/i)
	})

	it('snapshot', () => {
		const view = render(<App />)

		expect(view).toMatchSnapshot()
	})
})
