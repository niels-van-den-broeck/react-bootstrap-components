import React from 'react';
import { withChildren } from '../../Types/Types';

export type ButtonProps = withChildren<{
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  type: 'button' | 'submit';
  onClick: () => void;
  'data-testid'?: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
}>

export function Button({
  type = "button",
  variant = 'primary',
  onClick,
  className,
  id,
  'data-testid': dataTestId,
  children
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className || ''}`}
      onClick={onClick}
      data-testid={dataTestId}
      id={id}
    >
      {children}
    </button>
  );
}
