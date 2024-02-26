import {cleanup, createEvent, fireEvent, render,screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'

import Board from '@/components/Board';

import { columns } from '../mocks/columnData';
import { mockedMoveCardMutation } from '../mocks/mockedMutations';
import { MockedProvider } from '@apollo/client/testing';

const mocks = [mockedMoveCardMutation]

it('should call move card function', async () => {
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
                    console.log(newState)
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
    const [allcols,setColumns] = useState(columns)

      
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
    const inputElem = screen.getByDisplayValue(props.columns[0].cards[0].cardText)
    const dropTarget = screen.getByText(props.columns[1].columnTitle)
    
    //fireEvent.dragStart(inputElem)
    const myMap:any = {}
    const setData = jest.fn()
    const getData = jest.fn()
    getData.mockImplementation((keyName:String)=>{
      //return myMap[`${keyName}`]
      return JSON.stringify(props.columns[0].cards[0])
    })
    setData.mockImplementation((keyName:String, valueName:any)=>{
      myMap[`${keyName}`] = valueName
    })
    const mockDropEvent = createEvent.dragStart(inputElem)
    Object.assign(mockDropEvent, {dataTransfer: {setData}})
    fireEvent(inputElem, mockDropEvent)
    fireEvent.dragEnter(dropTarget)
    fireEvent.dragOver(dropTarget)
    fireEvent.drop(dropTarget,{dataTransfer:{getData}})
  
    const droppedElem = screen.getByDisplayValue(props.columns[0].cards[0].cardText)
    
  
    // expect(droppedElem).toBeInTheDocument()
    await waitFor(()=>{
      expect(setData).toHaveBeenCalled()
    })
  
  })