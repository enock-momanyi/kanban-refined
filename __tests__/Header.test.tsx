import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../src/components/Header';

it('should contain "Dahsboard"', ()=>{
    render(<Header/>)
    const hElem = screen.getByText("Dashboard")
    expect(hElem).toBeInTheDocument()
})
