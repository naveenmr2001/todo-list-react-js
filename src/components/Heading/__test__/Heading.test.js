import {render,screen} from '@testing-library/react';
import Heading from '../Heading';

it("should have header on the screen",()=>{
    render(<Heading/>);
    const headerElement = screen.getByRole("heading",{name:"Todo List"});
    expect(headerElement).toBeVisible();
})