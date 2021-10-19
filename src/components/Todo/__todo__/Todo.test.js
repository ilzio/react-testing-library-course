import { screen, render, fireEvent, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Todo from '../Todo'


const MockTodoComponent = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
)


// CREATE FUNCTION TO REPEAT ACTION

const addTasks = tasks => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
  const buttonElement = screen.getByRole('button', {name: /add/i});;

  return tasks.forEach(task => {
    fireEvent.change(inputElement, {target: {value: task}});
    fireEvent.click(buttonElement)
  });
}

afterEach(cleanup)


describe("Todo", () => {
  // it('should correctly add one items to todo list', () => {
  //   render(<MockTodoComponent />)
  //   const inputElement = screen.getByPlaceholderText(/Add a new task here.../)
  //   expect(inputElement).toBeInTheDocument()

  //   addTasks(['new todo'])

  //   expect(inputElement.value).toBe('')
  //   const divElement = screen.getByText(/new todo/i)
  //   expect(divElement).toBeInTheDocument()
  // });

  // it('should render multiple items to todo list', () => {
  //   render(<MockTodoComponent />)

  //   addTasks([
  //     'new todo_1',
  //     'new todo_2',
  //     'new todo_3',

  //   ])

  //   const divElements = screen.getAllByTestId(/todo-item/i)
  //   expect(divElements.length).toBe(3)

  // });

  // it('should not have completed class when first rendered', async () => {
  //   render(<MockTodoComponent />)
  //   addTasks(['new-todo'])
  //   const divElement = screen.getByText(/new-todo/i);
  //   expect(divElement).not.toHaveClass("todo-item-active")


  // });

  it('should have completed class when clicked', async () => {
    render(<MockTodoComponent />)
    addTasks(['testing todo'])
    const divElement = await screen.findByText("testing todo");
    console.log("🚀 ~ divElement className before click", divElement.className)

     fireEvent.click(divElement)



    console.log("🚀 ~ divElement className after click", divElement.className)
    expect(divElement).toHaveClass("todo-item-completed")



  });

});
