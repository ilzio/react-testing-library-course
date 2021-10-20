import { screen, render, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FollowersList, { fetchFollowersRequest } from '../FollowersList'
import {server, rest} from '../../../testServer'



const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
)


describe('FollowersList', () => {

  it('should render at least one fetched item  ', async () => {

    await act(async () => render(<MockFollowersList />));

    const divItems = await screen.findAllByTestId('follower-list-item')

    expect(divItems[0]).toBeInTheDocument()

  });
  it('should render multiple follower items ', async () => {

    // When testing, code that causes React state updates should be wrapped into act(...):

    await act(async () => render(<MockFollowersList />));

    const divItems = await screen.findAllByTestId('follower-list-item')

    expect(divItems.length).toBeTruthy()

  });

  it('should handle empty state ', async () => {

    const noFollowersData = {
      results: []
    }
    // this overrides server configurations, prepending desired config
    server.use(
      rest.get("https://randomuser.me/api", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(noFollowersData)
        )
      })
    )

    // When testing, code that causes React state updates should be wrapped into act(...):

    await act(async () => render(<MockFollowersList />));

    const emptyStateDivItem = await screen.findByText(/no followers/i)

    expect(emptyStateDivItem).toBeInTheDocument()


  });


  it('should handle request failure ', async () => {

    // this overrides server configurations, prepending desired config
    server.use(
      rest.get("https://randomuser.me/api", (req, res, ctx) => {
        return res(
          ctx.status(404)
        )
      })
    )
    // expecting exception
    expect(fetchFollowersRequest()).rejects.toThrow('404')

  });



});
