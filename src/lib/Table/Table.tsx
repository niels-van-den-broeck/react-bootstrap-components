import React from 'react';
import classNames from 'classnames';
import { withChildren } from '../../Types/Types';

export type TableProps = withChildren<{
  dark?: boolean;
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  compact?: boolean;
}>

export type ResponsiveTableProps = TableProps & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export type TableHeadProps = withChildren<{
  variant?: 'light' | 'dark';
}>;

export type TableHeadingProps = withChildren<{
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  scope?: 'row' | 'col';
  active: boolean;
  darkMode?: boolean;
}>

export type TableRowProps = withChildren<{}>

export function Table({ children, dark, striped, bordered, hoverable, compact }: TableProps): JSX.Element {
  return (
    <table
      className={classNames(
        'table',
        {
          'table-dark': dark,
          'table-striped': striped,
          'table-bordered': bordered,
          'table-hover': hoverable,
          'table-sm': compact,
        }
      )}
    >
      {React.Children.map(children, child => {
        if (child) {
          return React.cloneElement(child as React.ReactElement, {
            darkMode: dark,
          });
        }
        return child;
      })}
    </table>
  );
}

export function ResponsiveTable({
  children,
  dark,
  striped,
  bordered,
  hoverable,
  compact,
  size
}: ResponsiveTableProps): JSX.Element {
  return (
    <div
      className={size ? `table-responsive-${size}` : 'table-responsive'}
    >
      <Table
        dark={dark}
        striped={striped}
        bordered={bordered}
        hoverable={hoverable}
        compact={compact}
      >
        {children}
      </Table>
    </div>
  )
}

function TableHead({ children, variant }: TableHeadProps): JSX.Element {
  return (
    <thead
      className={variant ?? `thead-${variant}`}
    >
      {children}
    </thead>
  );
}

function TableHeading({ children, scope, variant, active = true, darkMode = false }: TableHeadingProps): JSX.Element {
  const prefixClass = darkMode ? 'bg-' : 'table-';

  return (
    <th
      scope={scope}
      className={classNames(
        {
          'table-active': active,
        },
        variant && `${prefixClass}${variant}`
      )}
    >
      {children}
    </th>
  );
}

function TableRow({ children }: TableRowProps): JSX.Element {
  return (
    <tr>{children}</tr>
  );
}

function TableBody(): JSX.Element {
  return null;
}

function TableField(): JSX.Element {
  return null;
}

Table.Head = TableHead;
Table.Heading = TableHeading;
Table.Row = TableRow;
