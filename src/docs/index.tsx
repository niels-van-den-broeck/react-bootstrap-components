import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '../lib/Button/Button';

const App: React.FC = () => (
  <div>
    <h1>Bootstrap React Components</h1>

    <h2> Button </h2>
    <h3>Button variants</h3>
    <Button variant="primary" type="button">
      Primary button
    </Button>
    <Button variant="secondary" type="button">
      Secondary button
    </Button>
    <Button variant="danger" type="button">
      Danger button
    </Button>
    <Button variant="success" type="button">
      Success button
    </Button>
    <Button variant="warning" type="button">
      Warning button
    </Button>
    <Button variant="info" type="button">
      Info button
    </Button>
    <Button variant="light" type="button">
      Light button
    </Button>
    <Button variant="dark" type="button">
      Dark button
    </Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
