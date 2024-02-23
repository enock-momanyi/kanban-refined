import {cleanup, fireEvent, render,screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'

import InputComponent from '@/components/InputComponent';

it('should contain the text "Add" for empty value', async ()=>{
    const props = {
        label:'Name',
        inputRefVar:jest.fn(),
        cancelFunc:jest.fn(),
        addFunc:jest.fn(),
        value:''
    }
    render(<InputComponent {...props} />)
    await waitFor(()=>{
        expect(screen.getByText('Add')).toBeInTheDocument()
    })
})
it('should not contain the text "Add" for non-empty value',async ()=>{
    const props = {
        label:'Name',
        inputRefVar:jest.fn(),
        cancelFunc:jest.fn(),
        addFunc:jest.fn(),
        value:'To Do'
    }
    render(<InputComponent {...props} />)
    await waitFor(()=>{
        expect(screen.queryByText('Add')).toBeNull()
    })
})
it('should contain the text "Rename" for non-empty value',async ()=>{
    const props = {
        label:'Name',
        inputRefVar:jest.fn(),
        cancelFunc:jest.fn(),
        addFunc:jest.fn(),
        value:'To Do'
    }
    render(<InputComponent {...props} />)
    await waitFor(()=>{
        expect(screen.queryByText("Rename")).toBeInTheDocument()
    })
})
it('should not contain the text "Rename" for empty value',async ()=>{
    const props = {
        label:'Name',
        inputRefVar:jest.fn(),
        cancelFunc:jest.fn(),
        addFunc:jest.fn(),
        value:''
    }
    render(<InputComponent {...props} />)
    await waitFor(()=>{
        expect(screen.queryByText("Rename")).toBeNull()
    })
})