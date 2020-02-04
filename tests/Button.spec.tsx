import React from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';

import { Button, ButtonProps } from '../src/lib/Button/Button';

describe('Button component', () => {
    function render({ variant, type }: ButtonProps = {}): RenderResult {
        return rtlRender(<Button variant={variant} type={type}>A Button</Button>)
    }

    test('it renders the button by default', () => {
        const { getByRole } = render();
        const button = getByRole('button');

        expect(button).toHaveClass('btn btn-primary');
        expect(button).toHaveAttribute('type', 'button');
        expect(button).toHaveTextContent('A button');
    });
});
