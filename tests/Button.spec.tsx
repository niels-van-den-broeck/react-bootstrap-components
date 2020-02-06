import React from 'react';
import { render as rtlRender, RenderResult, fireEvent } from '@testing-library/react';

import { Button, ButtonProps } from '../src/lib/Button/Button';

describe('Button component', () => {
  function render(props: ButtonProps | {} = {}): RenderResult {
    const { variant, type, onClick, 'data-testid': dataTestId } = props as ButtonProps;
    return rtlRender(
      <Button variant={variant} type={type} onClick={onClick} data-testid={dataTestId}>
        A Button
      </Button>
    );
  }

  test('it renders the button by default', () => {
    const { getByRole } = render();
    const button = getByRole('button');

    expect(button).toHaveClass('btn btn-primary');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveTextContent('A Button');
  });

  test('it attaches the click event to the button', () => {
    const clickHandler = jest.fn();

    const { getByRole } = render({ onClick: clickHandler });

    fireEvent.click(getByRole('button'));

    expect(clickHandler).toHaveBeenCalled();
  });
});
