import {cleanup, fireEvent, render,screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'

import Board from '@/components/Board';

import { columns } from '../mocks/columnData';
import { mockedClearColumnMutation, mockedClearColumnMutationError } from '../mocks/mockedMutations';
import { MockedProvider } from '@apollo/client/testing';

const mocks =[mockedClearColumnMutation]
it('should should call setColumns state function after click clear', async() => {
    const setState = jest.fn()
    setState.mockImplementation((newState:any)=>{

    })
    const useState =jest.fn()
    useState.mockImplementation((initialValue:any)=>{
                // Initialize state variable
                let state = initialValue;
      
                const setState = jest.fn()
                setState.mockImplementation((newState:any)=>{
                    state = newState
                })
                const setStateFunction = jest.fn()
                setStateFunction.mockImplementation((updateFunction:any)=>{
                                      // Get the current state before the update
                    const currentState = state;
                
                    // Calculate the new state using the update function
                    const newState = typeof updateFunction === 'function' ? updateFunction(currentState) : updateFunction;
                
                    // Update the state and trigger re-render
                    setState(newState);  
                })
              
                // Return state variable and setState function
                return [state, setStateFunction];
    })
    const [_,setColumns] = useState(columns)
      
    const props ={
        columns: columns,
        addNewColumn:jest.fn(),
        setColumns: setColumns
    }
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Board {...props} />
        </MockedProvider>
    )
    const threeDots = screen.getAllByTestId('MoreHorizSharpIcon')[0]
    const cardText = screen.getByText('Create Reusable component')
    fireEvent.click(threeDots)
    const clearColumnButton = screen.getByText('Clear')
    fireEvent.click(clearColumnButton)
    expect(props.setColumns).toHaveBeenCalled()
})
const mockWithError = [mockedClearColumnMutationError]
it('should should call setColumns state function after click clear', async() => {
    const setState = jest.fn()
    setState.mockImplementation((newState:any)=>{

    })
    const useState =jest.fn()
    useState.mockImplementation((initialValue:any)=>{
                // Initialize state variable
                let state = initialValue;
      
                const setState = jest.fn()
                setState.mockImplementation((newState:any)=>{
                    state = newState
                })
                const setStateFunction = jest.fn()
                setStateFunction.mockImplementation((updateFunction:any)=>{
                                      // Get the current state before the update
                    const currentState = state;
                
                    // Calculate the new state using the update function
                    const newState = typeof updateFunction === 'function' ? updateFunction(currentState) : updateFunction;
                
                    // Update the state and trigger re-render
                    setState(newState);  
                })
              
                // Return state variable and setState function
                return [state, setStateFunction];
    })
    const [_,setColumns] = useState(columns)
      
    const props ={
        columns: columns,
        addNewColumn:jest.fn(),
        setColumns: setColumns
    }
    render(
        <MockedProvider mocks={mockWithError} addTypename={false}>
            <Board {...props} />
        </MockedProvider>
    )
    const threeDots = screen.getAllByTestId('MoreHorizSharpIcon')[0]
    const cardText = screen.getByText('Create Reusable component')
    fireEvent.click(threeDots)
    const clearColumnButton = screen.getByText('Clear')
    fireEvent.click(clearColumnButton)
    expect(props.setColumns).toHaveBeenCalled()
})