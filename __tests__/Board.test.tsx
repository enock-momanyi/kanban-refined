import {cleanup, fireEvent, render,screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'

import Board from '@/components/Board';

import { columns } from '../mocks/columnData';

it('should contain the text "Add Column"',()=>{
    const props ={
        columns: columns,
        addNewColumn:jest.fn(),
        setColumns: jest.fn()
    }

    render(<Board {...props} />)
    expect(screen.getByText("Add Column")).toBeInTheDocument()
})
it('should not contain add column textbox after cancel click event',()=>{
    const props ={
        columns: columns,
        addNewColumn:jest.fn(),
        setColumns: jest.fn()
    }
    render(<Board {...props} />)
    const buttonAddColumn = screen.getByText("Add Column")
    fireEvent.click(buttonAddColumn)
    const textBox = screen.getByLabelText('Name')
    fireEvent.change(textBox,{target:{value:"To Do"}})
    const cancelButton = screen.getByText("Cancel")
    fireEvent.click(cancelButton)
    expect(textBox).not.toBeInTheDocument()

})
it('should contain text "RandomTitle" after add click event',async ()=>{
    const setColumns=jest.fn()
    setColumns.mockImplementation((arr:any[])=>{
        return arr;
    })
    const props ={
        columns: columns,
        addNewColumn:jest.fn(),
        setColumns: setColumns
    }
    render(<Board {...props} />)
    const buttonAddColumn = screen.getByText("Add Column")
    fireEvent.click(buttonAddColumn)
    const textBox = screen.getByLabelText('Name')
    fireEvent.change(textBox,{target:{value:"RandomTitle"}})
    const addButton = screen.getByText(/^Add$/i)
    fireEvent.click(addButton)
    expect(props.setColumns).toHaveBeenCalled()

})
it('should contain text "Test reusable component" after addCard on column 1 click event',async ()=>{
    const setColumns=jest.fn()
    setColumns.mockImplementation((arr:any[])=>{
        return arr;
    })
    const props ={
        columns: columns,
        addNewColumn:jest.fn(),
        setColumns: setColumns
    }
    render(<Board {...props} />)
    const buttonAddCard = screen.getAllByText("Add Card")[0]
    fireEvent.click(buttonAddCard)
    const textBox = screen.getByLabelText('Title')
    fireEvent.change(textBox,{target:{value:"Test reusable component"}})
    const addButton = screen.getByText(/^Add$/i)
    fireEvent.click(addButton)
    expect(props.setColumns).toHaveBeenCalled()

})
