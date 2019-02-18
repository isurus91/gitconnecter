import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from  './components/Homepage';
import * as serviceWorker from './serviceWorker';
import Tickets from '../src/sub-components/Tickets/newTickets';
import Routes from './sub-components/route'
import { HashRouter } from 'react-router-dom';
import Pie from './sub-components/graphs/pieChart'

ReactDOM.render(
    <HashRouter>
    <Routes />
  </HashRouter>, document.getElementById('root')
);

