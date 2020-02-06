import React from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';

import { Table, TableProps, ResponsiveTableProps, ResponsiveTable } from '../src/lib/Table/Table'

describe('Table Components', () => {
  function createTable(props: TableProps | {} = {}): JSX.Element {
    const { dark, striped, bordered, hoverable, compact } = props as TableProps;

    return (
      <Table
        dark={dark}
        striped={striped}
        bordered={bordered}
        hoverable={hoverable}
        compact={compact}
      >
        <Table.Head>
          <Table.Row>
            <Table.Heading>
              Header
            </Table.Heading>
          </Table.Row>
        </Table.Head>
      </Table>
    );
  }

  function createResponsiveTable(props: ResponsiveTableProps | {} = {}): JSX.Element {
    const { dark, striped, bordered, hoverable, compact, size } = props as ResponsiveTableProps;

    return (
      <ResponsiveTable
        dark={dark}
        striped={striped}
        bordered={bordered}
        hoverable={hoverable}
        compact={compact}
        size={size}
      >
        <Table.Head>
          <Table.Row>
            <Table.Heading>
              Header
            </Table.Heading>
          </Table.Row>
        </Table.Head>
      </ResponsiveTable>
    );
  }

  function render(props: TableProps | {} = {}): RenderResult {
    return rtlRender(createTable(props));
  }

  function renderResponsive(props: ResponsiveTableProps | {} = {}): RenderResult {
    return rtlRender(createResponsiveTable(props));
  }
  describe('table', () => {
    test('it renders by default', () => {
      const { getByRole } = render();

      const table = getByRole('table')

      expect(table).toHaveClass('table');
      expect(table).not.toHaveClass('table-dark', 'table-striped', 'table-bordered', 'table-hover', 'table-sm')
      expect(getByRole('rowgroup')).toBeInTheDocument();
    });

    test('it renders with the correct classNames according to the given props', () => {
      const { getAllByRole } = rtlRender(
        <>
          {createTable({ dark: true })}
          {createTable({ striped: true })}
          {createTable({ bordered: true })}
          {createTable({ hoverable: true })}
          {createTable({ compact: true })}
        </>
      )

      const [darkTable, stripedTable, borderedTable, hoverTable, compactTable] = getAllByRole('table');

      expect(darkTable).toHaveClass('table', 'table-dark');
      expect(stripedTable).toHaveClass('table', 'table-striped');
      expect(borderedTable).toHaveClass('table', 'table-bordered');
      expect(hoverTable).toHaveClass('table', 'table-hover');
      expect(compactTable).toHaveClass('table', 'table-sm');
    });
  });

  describe('responsive table', () => {
    test('it renders the responsive table by default', () => {
      const { getByRole } = renderResponsive();

      const table = getByRole('table');

      expect(table.parentElement).toHaveClass('table-responsive');
      expect(table).toHaveClass('table');
      expect(table).not.toHaveClass('table-dark', 'table-striped', 'table-bordered', 'table-hover', 'table-sm')
      expect(getByRole('rowgroup')).toBeInTheDocument();
    });

    test('it sets the given size on the parent element', () => {
      const { getAllByRole } = rtlRender(
        <>
          {createResponsiveTable()}
          {createResponsiveTable({ size: 'sm' })}
          {createResponsiveTable({ size: 'md' })}
          {createResponsiveTable({ size: 'lg' })}
          {createResponsiveTable({ size: 'xl' })}
        </>
      );

      const [noDefinedSize, small, medium, large, xtraLarge] = getAllByRole('table');

      expect(noDefinedSize.parentElement).toHaveClass('table-responsive');
      expect(small.parentElement).toHaveClass('table-responsive-sm');
      expect(medium.parentElement).toHaveClass('table-responsive-md');
      expect(large.parentElement).toHaveClass('table-responsive-lg');
      expect(xtraLarge.parentElement).toHaveClass('table-responsive-xl');
    });

    test('it renders the underlying table with the correct classNames according to the given props', () => {
      const { getAllByRole } = rtlRender(
        <>
          {createResponsiveTable({ dark: true })}
          {createResponsiveTable({ striped: true })}
          {createResponsiveTable({ bordered: true })}
          {createResponsiveTable({ hoverable: true })}
          {createResponsiveTable({ compact: true })}
        </>
      )

      const [darkTable, stripedTable, borderedTable, hoverTable, compactTable] = getAllByRole('table');

      expect(darkTable).toHaveClass('table', 'table-dark');
      expect(stripedTable).toHaveClass('table', 'table-striped');
      expect(borderedTable).toHaveClass('table', 'table-bordered');
      expect(hoverTable).toHaveClass('table', 'table-hover');
      expect(compactTable).toHaveClass('table', 'table-sm');
    });
  });

  describe('tablehead', () => {
    it('it renders the tablehead', () => {

    });
  });
});
