import {cleanup, fireEvent, render,screen} from '@testing-library/react';
import '@testing-library/jest-dom'


import AddCard from '@/components/AddCard';

it('should containe text, "click me"', () => {
    const props={
        buttonText: 'click me',
        buttonFunction: jest.fn()
    }
    render(<AddCard {...props} />)

    expect(screen.queryByText(props.buttonText)).toBeInTheDocument()
})

