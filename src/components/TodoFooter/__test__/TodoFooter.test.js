import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TodoFooter from '../TodoFooter'


const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

describe("TodoFooter", () => {


  it('should correctly receive and display number of incomplete tasks', () => {
    render(
      <MockTodoFooter numberOfIncompleteTasks={5} />
    )

    const paragraphElement = screen.getByText(/5 tasks left/i)



    expect(paragraphElement).toBeInTheDocument()

  })

  it('should use singular for only one task', () => {
    render(
      <MockTodoFooter
        numberOfIncompleteTasks={1}
      />
    )

    const paragraphElement = screen.getByText(/1 task left/i)

    expect(paragraphElement).toBeInTheDocument()

  })

})

// it('should be truthy', () => {
//   render(
//     <MockTodoFooter
//       numberOfIncompleteTasks={1}
//     />
//   )

//   const paragraphElement = screen.getByText(/1 task left/i)

//   expect(paragraphElement).toBeTruthy()

// })
// it('should be visible', () => {

//   // An element is visible if all the following conditions are met:

//   // it does not have its css property display set to none
//   // it does not have its css property visibility set to either hidden or collapse
//   // it does not have its css property opacity set to 0
//   // its parent element is also visible (and so on up to the top of the DOM tree)
//   // it does not have the hidden attribute
//   // if <details /> it has the open attribute

//   render(
//     <MockTodoFooter
//       numberOfIncompleteTasks={1}
//     />
//   )

//   const paragraphElement = screen.getByText(/1 task left/i)

//   expect(paragraphElement).toBeVisible()

// })


// it('should have text document', () => {
//   render(
//     <MockTodoFooter
//       numberOfIncompleteTasks={1}
//     />
//   )

//   const paragraphElement = screen.getByTestId("para")

//   expect(paragraphElement).toHaveTextContent("1 task left")

// })


// it('should contain specific html tags', () => {
//   render(
//     <MockTodoFooter
//       numberOfIncompleteTasks={1}
//     />
//   )

//   const paragraphElement = screen.getByText(/1 task left/i)

//   expect(paragraphElement).toContainHTML("p")

// })


// it('should contain specific html tags', () => {
//   render(
//     <MockTodoFooter
//       numberOfIncompleteTasks={1}
//     />
//   )

//   const paragraphElement = screen.getByText(/1 task left/i)

//   expect(paragraphElement.textContent).toBe('1 task left')

// })

