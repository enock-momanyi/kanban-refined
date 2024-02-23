import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom'

import ColumnTitle from '@/components/ColumnTitle';

it('should have the word "To Do"', () => {
    const colTitle ='To Do'

    render(<ColumnTitle columnTitle={colTitle} />)

    expect(screen.getByText(colTitle)).toBeInTheDocument()
})