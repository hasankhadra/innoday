import Header from '../../components/Header'
import {render, screen} from '@testing-library/react'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Header />)

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'))
  await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})