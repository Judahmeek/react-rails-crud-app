import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactOnRails from 'react-on-rails';
import Routes from '../components/App';

const Application = props => (
  <BrowserRouter>
    <Routes {...props} />
  </BrowserRouter>
);

ReactOnRails.register({Application});
