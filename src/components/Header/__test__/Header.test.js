import { render, screen } from '@testing-library/react'


import Header from '../Header'

describe('Header', () => {

  it('should render same text passed into title prop', async () => {
    render(<Header title="My header" />);
    const headingElement = screen.getByText(/my header/i)
    expect(headingElement).toBeInTheDocument()

  })
})


// // get by role and look for speficific text!!
// it('should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByRole("heading", {name: 'My header'})

//   expect(headingElement).toBeInTheDocument()

// })

// it('should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);

//   const headingElement = screen.getByTitle("Header")

//   expect(headingElement).toBeInTheDocument()

// })


// it('should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);

//   const headingElement = screen.getByTestId("header-1")

//   expect(headingElement).toBeInTheDocument()

// })

// // FIND BY -> ASYNC!!!

// it('should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = await screen.findByText(/my header/i)

//   expect(headingElement).toBeInTheDocument()

// })


// // QUERY BY, looking for a non existing element - getBy / findBy would fail!!

// it('should not contain heading with text dog', async () => {
//   render(<Header title="My header" />);
//   // get by role and look for speficific text
//   const headingElement = screen.queryByText(/dogs/i)

//   expect(headingElement).not.toBeInTheDocument()

// })

// // QUERY BY, looking for a non existing element - getBy / findBy would fail!!

// it('should render two headings', async () => {
//   render(<Header title="My header" />);
//   const headingElements = screen.getAllByRole("heading")
//   expect(headingElements.length).toBe(2)

// })
