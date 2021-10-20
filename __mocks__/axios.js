const mockResponse = {
  data: {
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
          username: "--user-name"
        }
      }
    ]
  }
}


export default {
  get: jest.fn().mockResolvedValue(mockResponse)
  // this is the same as
  // get: jest.fn().mockImplementation(() => Promise.resolve(mockResponse))
}
