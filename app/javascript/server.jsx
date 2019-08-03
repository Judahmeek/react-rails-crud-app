import React from 'react';
import { render } from 'react-dom';
import { StaticRouter } from 'react-router-dom';
import ReactOnRails from 'react-on-rails';
import Routes from './components/App';

const application = (props, railsContext) => (
  <StaticRouter location={railsContext.location} context={{}}>
    <Routes {...props} />
  </StaticRouter>
);

ReactOnRails.register({application});
