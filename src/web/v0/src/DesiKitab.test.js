import React from 'react';
import ReactDOM from 'react-dom';
import DesiKitab from './DesiKitab';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DesiKitab />, div);
  ReactDOM.unmountComponentAtNode(div);
});
