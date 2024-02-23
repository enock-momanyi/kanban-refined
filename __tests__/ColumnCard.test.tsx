import {cleanup, fireEvent, render,screen} from '@testing-library/react';
import '@testing-library/jest-dom'

import ColumnCard from '@/components/ColumnCard';

it('should contain the text "create reusable component"', () => {
    const props ={
        cardText: 'create reusable component',
        handleOnDrag: jest.fn()
    }

    render(<ColumnCard {...props} />)

    expect(screen.getByText(props.cardText)).toBeInTheDocument()
})