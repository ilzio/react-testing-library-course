import { screen, render, act } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { BrowserRouter } from 'react-router-dom'
import FollowersList, { fetchFollowersRequest } from '../FollowersList'


const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
)


const followersData = {

  results: [
    {
      name: {
        first: "Jack",
        last: "Gordon"
      },
      picture: {
        large: ''
      },
      login: {
        username: " Jackie"
      }
    }
  ]

}
const noFollowersData = {
  results: []
}

// configuring server
const server = setupServer(
  // intercept get requests for specified url
  rest.get("https://randomuser.me/api", (req, res, ctx) => {
    // return server response (note that data should not be included)
    return res(
      ctx.status(200),
      ctx.json(followersData)
    )
  }),
  // catch all route
  rest.get('*', (req, res, ctx) => {
    console.error(`Request handler for ${req.url.toString()} does not exist `)
    return res(
      ctx.status(500),
      ctx.json({error: 'Please add request handler '})
    )
  })
)


// tell server to start and stop before and after all tests and to reset handlers after each
describe('FollowersList', () => {

  beforeAll(() => server.listen())
  afterAll(() => server.close())

  afterEach(() => server.resetHandlers())



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
