import { render, screen, fireEvent } from '@testing-library/react'

import AddInput from '../AddInput'

// make a mock function
const mockedSetTodo = jest.fn()

describe('AddInput', () => {

  it('should render input value', () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodo}
      />
    )
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(inputElement).toBeInTheDocument()
  });

  it('should be able to type in input', () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodo}
      />
    )
    const inputElement = screen.getByRole('textbox')
    // there is no type event so we use change, it takes two parameters: element to be changed and options object watch syntax!!
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
    expect(inputElement.value).toBe('Go grocery shopping')
  });

  it('should reset input when add button clicked ', () => {

    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodo}
      />
    )
    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
    expect(inputElement.value).toBe('Go grocery shopping')
    const buttonElement = screen.getByRole('button', { name: /Add/i })
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe('')
  })

})
