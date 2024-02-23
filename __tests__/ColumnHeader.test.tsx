import {cleanup, fireEvent, render,screen} from '@testing-library/react';
import '@testing-library/jest-dom'

import ColumnHeader from '@/components/ColumnHeader';

const propsGen = {
    columnTitle: 'To Do',
    functionSet:{
        rename: jest.fn(),
        clear: jest.fn(),
        deleteColumn: jest.fn()
    }
}
afterEach(()=>{
    cleanup()
})
it('should disaplay column title', () => {
    const props = {
        columnTitle: 'To Do',
        functionSet:{
            rename: jest.fn(),
            clear: jest.fn(),
            deleteColumn: jest.fn()
        }
    }
    render(<ColumnHeader {...props} />)
    expect(screen.getByText(props.columnTitle)).toBeInTheDocument()
})

it('should containe the "MoreHorizSharpIcon"',() => {
    const props = {
        columnTitle: 'To Do',
        functionSet:{
            rename: jest.fn(),
            clear: jest.fn(),
            deleteColumn: jest.fn()
        }
    }
    render(<ColumnHeader {...props} />)
    expect(screen.getByTestId('MoreHorizSharpIcon')).toBeInTheDocument()
})

it('should contain the "Delete" when MoreHorizSharpIcon is clicked ',() => {
    const props = {
        columnTitle: 'To Do',
        functionSet:{
            rename: jest.fn(),
            clear: jest.fn(),
            deleteColumn: jest.fn()
        }
    }
    render(<ColumnHeader {...props} />)
    const threeDots = screen.getByTestId('MoreHorizSharpIcon')
    fireEvent.click(threeDots)
    expect(screen.getByText("Delete")).toBeInTheDocument()
})
it('should call deleteColumn function when "Delete" is clicked ',() => {
    const props = {
        columnTitle: 'To Do',
        functionSet:{
            rename: jest.fn(),
            clear: jest.fn(),
            deleteColumn: jest.fn()
        }
    }
    render(<ColumnHeader {...props} />)
    const threeDots = screen.getByTestId('MoreHorizSharpIcon')
    fireEvent.click(threeDots)
    const deleteElem = screen.getByText("Delete")
    fireEvent.click(deleteElem)
    expect(props.functionSet.deleteColumn).toHaveBeenCalled()
})
it('should call rename function when "Rename" is clicked ',() => {
    const props = {
        columnTitle: 'To Do',
        functionSet:{
            rename: jest.fn(),
            clear: jest.fn(),
            deleteColumn: jest.fn()
        }
    }
    render(<ColumnHeader {...props} />)
    const threeDots = screen.getByTestId('MoreHorizSharpIcon')
    fireEvent.click(threeDots)
    const renameElem = screen.getByText("Rename")
    fireEvent.click(renameElem)
    expect(props.functionSet.rename).toHaveBeenCalled()
})
it('should call clear function when "Clear" is clicked ',() => {
    const props = {
        columnTitle: 'To Do',
        functionSet:{
            rename: jest.fn(),
            clear: jest.fn(),
            deleteColumn: jest.fn()
        }
    }
    render(<ColumnHeader {...props} />)
    const threeDots = screen.getByTestId('MoreHorizSharpIcon')
    fireEvent.click(threeDots)
    const clearElem = screen.getByText("Clear")
    fireEvent.click(clearElem)
    expect(props.functionSet.clear).toHaveBeenCalled()
})