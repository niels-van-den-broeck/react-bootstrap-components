import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '../lib/Button/Button';
import { Table } from '../lib/Table/Table';

function noop(): void {
  console.log('click')
}

const App: React.FC = () => (
  <div>
    <h1>Bootstrap React Components</h1>

    <h2> Button </h2>
    <h3>Button variants</h3>
    <Button variant="primary" type="button" onClick={noop}>
      Primary button
    </Button>
    <Button variant="secondary" type="button" onClick={noop}>
      Secondary button
    </Button>
    <Button variant="danger" type="button" onClick={noop}>
      Danger button
    </Button>
    <Button variant="success" type="button" onClick={noop}>
      Success button
    </Button>
    <Button variant="warning" type="button" onClick={noop}>
      Warning button
    </Button>
    <Button variant="info" type="button" onClick={noop}>
      Info button
    </Button>
    <Button variant="light" type="button" onClick={noop}>
      Light button
    </Button>
    <Button variant="dark" type="button" onClick={noop}>
      Dark button
    </Button>
    <Table
      dark={false}
    >
      <Table.Head>
        <Table.Row>
          <Table.Heading
            active={true}
          >
            Heading
          </Table.Heading>
        </Table.Row>
      </Table.Head>
    </Table>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
