import { rest } from 'msw'
import { setupServer } from 'msw/node'





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

// tell server to listen and close before and after all tests and resetHandlers after each
beforeAll(() => server.listen())
afterAll(() => server.close())

afterEach(() => server.resetHandlers())



export {server, rest}
