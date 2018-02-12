import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DesiKitab from './DesiKitab';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DesiKitab/>, document.getElementById('root'));
registerServiceWorker();
