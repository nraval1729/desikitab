import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import DesikitabWrapper from './DesikitabWrapper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
								<BrowserRouter>
									<DesikitabWrapper/>
								</BrowserRouter>,
								document.getElementById('root')
								);
registerServiceWorker();
