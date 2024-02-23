import { fireEvent, render,screen} from '@testing-library/react';
import '@testing-library/jest-dom'


import KanbanColumn from '@/components/KanbanColumn';



it('should call the setColumns state function when you clear a column ', () => {
    const props = {
        columnId: '1',
        columnTitle:'To Do',
        cards:[
            {
                id:'232',
                columnId:'1',
                cardText:'Create Reusable component'
            }
        ],
        addCardFunc: jest.fn(),
        setColumns: jest.fn()
    }
    // props.setColumns.mockImplementation((arr:any[])=>{
    //     return arr;
    // })
    
    render(<KanbanColumn {...props}/>)
    const threeDots = screen.getByTestId('MoreHorizSharpIcon')
    const cardText = screen.getByText('Create Reusable component')
    fireEvent.click(threeDots)
    const clearColumnButton = screen.getByText('Clear')
    fireEvent.click(clearColumnButton)
    expect(props.setColumns).toHaveBeenCalled()
})
it('should not have not have element with label title once cancel is clicked ', () => {
    const props = {
        columnId: '1',
        columnTitle:'To Do',
        cards:[
            {
                id:'232',
                columnId:'1',
                cardText:'Create Reusable component'
            }
        ],
        addCardFunc: jest.fn(),
        setColumns: jest.fn()
    }
    // props.setColumns.mockImplementation((arr:any[])=>{
    //     return arr;
    // })
    
    render(<KanbanColumn {...props}/>)
    const addCardButton = screen.getByText('Add Card')
    fireEvent.click(addCardButton)
    const inputElem = screen.getByLabelText('Title')
    const cancelAddButton = screen.getByText('Cancel')
    fireEvent.click(cancelAddButton)
    expect(inputElem).not.toBeInTheDocument()
})