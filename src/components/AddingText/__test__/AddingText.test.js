import {fireEvent, render,screen} from '@testing-library/react';
import AddingText from '../AddingText';

const mockSetTodos = jest.fn();

describe("Check the functionality of input feild",()=>{
    it("should have a input feild on the screen",()=>{
        render(<AddingText toDos={[]} settodos={mockSetTodos}/>);
        const inputFeild = screen.getByPlaceholderText("Type the todo task");
        expect(inputFeild).toBeVisible();
    })

    it("should check whether a input feild has value entered on the screen",()=>{
        render(<AddingText toDos={[]} settodos={mockSetTodos}/>);
        const inputFeild = screen.getByPlaceholderText("Type the todo task");
        fireEvent.click(inputFeild);
        fireEvent.change(inputFeild,{target:{value:"Task One"}});
        expect(inputFeild.value).toBe("Task One")
    })
})

describe("Check the functionality of button",()=>{
    it("should have a button on the screen",()=>{
        render(<AddingText toDos={[]} settodos={mockSetTodos}/>);
        const ButtonElement = screen.getByRole("button",{name:"Add Task"});
        expect(ButtonElement).toBeVisible();
    })  

    it('should add the input feild value to the todos List',()=>{
        render(<AddingText todo={[]} settodos={mockSetTodos}/>);
        const inputFeild = screen.getByPlaceholderText("Type the todo task");
        fireEvent.click(inputFeild);
        fireEvent.change(inputFeild,{target:{value:"Task One"}});
        const ButtonElement = screen.getByRole("button",{name:"Add Task"});
        fireEvent.click(ButtonElement);
        expect(mockSetTodos).toBeCalled();
    })

    it('should add the input feild value to the todos list and clear the inputFeild',()=>{
        render(<AddingText todo={[]} settodos={mockSetTodos}/>)
        const ButtonElement = screen.getByRole("button",{name:"Add Task"});
        const inputFeild = screen.getByPlaceholderText("Type the todo task");
        fireEvent.click(inputFeild);
        fireEvent.change(inputFeild,{target:{value:"Task One"}});
        fireEvent.click(ButtonElement);
        expect(inputFeild.value).toBe("")
    })
})
