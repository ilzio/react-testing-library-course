import { screen, render, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import FollowersList from '../FollowersList'

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
)

describe('FollowersList', () => {


  beforeEach(() => {
    console.log("running before each test")
  })

  afterEach(() => {
    console.log("running after each test")

  })


  beforeAll(() => {
    console.log("running before all tests")
  })

  afterAll(() => {
    console.log("running after all tests are successfully run")
  })

  it('should render at least one fetched item  ', async () => {
    await act( async () => render(<MockFollowersList/>));

    const divItems = await screen.findAllByTestId('follower-list-item')

    expect(divItems[0]).toBeInTheDocument()

  })
  it('should render multiple follower items ', async () => {
    render(<MockFollowersList />)
    const divItems = await screen.findAllByTestId('follower-list-item')

    expect(divItems.length).toBeTruthy()

  })


})
