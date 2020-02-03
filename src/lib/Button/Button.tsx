import React from 'react';

export type ButtonProps = {
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  type: 'button' | 'submit';
  children: React.ReactNode;
};

export function Button({ type = "button", variant = 'primary', ...rest }: ButtonProps): JSX.Element {
  return <button type={type} className={`btn btn-${variant}`} {...rest} />;
}
