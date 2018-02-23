import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlayerView from './PlayerView';
import metadata from './Metadata';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
                <PlayerView 
                  metadata = {metadata}
                />,
                document.getElementById('root')
                );
registerServiceWorker();
