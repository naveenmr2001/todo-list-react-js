import {render,screen,fireEvent} from '@testing-library/react';
import Todo from '../Todo';

const addTask = (task) =>{
    const inputFeild = screen.getByPlaceholderText("Type the todo task");
    const ButtonElement = screen.getByRole("button",{name:"Add Task"});
    task.forEach(element => {
        fireEvent.click(inputFeild);
        fireEvent.change(inputFeild,{target:{value:element}});
        fireEvent.click(ButtonElement);    
    });
}

describe("To Check the funtionality of the taskList",()=>{
    it("should check whether a task as been displayed in the screen",()=>{
        const task = ["Task One"];
        render(<Todo/>);
        addTask(task);
        const taskData = screen.getAllByTestId("taskid");
        taskData.forEach((task)=>{
            expect(task).toBeVisible();
        })
    })

    it("should check whether a tasks as been displayed in the screen",()=>{
        const task = ["Task One","Task Two"];
        render(<Todo/>);
        addTask(task);
        const taskData = screen.getAllByTestId("taskid");
        taskData.forEach((task)=>{
            expect(task).toBeVisible();
        })
    })

    it("should check whether duplicate should not be present",()=>{
        const task = ["Task One","Task One"];
        render(<Todo/>);
        addTask(task);
        const taskData = screen.getAllByTestId("taskid");
        expect(taskData.length).toBe(1);
    })
})