import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import MessyDirectory from '../teamDirectoryMain'

describe('Team directory feature (intentionally chaotic)', () => {
  it('shows people, filters by search, and reacts to department click', async () => {
    jest.useFakeTimers()

    render(<MessyDirectory />)

    act(() => {
      jest.advanceTimersByTime(1500)
    })

    const cards = await screen.findAllByTestId(/team-card-/)
    expect(cards.length).toBeGreaterThan(0)

    const searchBox: any = screen.getByPlaceholderText('Search by name, title, or bio...')
    fireEvent.change(searchBox, { target: { value: 'marcus' } })

    act(() => {
      jest.advanceTimersByTime(250)
    })

    await waitFor(() => expect(screen.getByText('Marcus Johnson')).toBeInTheDocument())

    const designButtons = screen.getAllByText('Design')
    fireEvent.click(designButtons[0])

    await waitFor(() => {
      const grid = screen.getByTestId('directory-grid')
      expect(grid.textContent?.includes('Design')).toBeTruthy()
    })
  })
})
