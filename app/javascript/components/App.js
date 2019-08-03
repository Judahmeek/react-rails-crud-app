import React from 'react';
import { Route } from 'react-router-dom';
import { Alert } from '../helpers/notifications';
import Editor from './Editor';
import './App.css';

const App = props => (
  (() => { console.log(`props: ${props}`) })() ||
  <div>
    <Route path="/events/:id?" {...props} render={routeProps => <Editor {...props} {...routeProps} />} />
    <Alert stack={{ limit: 3 }} />
  </div>
);

export default App;
