import React from 'react';
import { Route } from 'react-router-dom';
import Editor from './Editor';
import './App.css';

const App = props => (
  (() => { console.log(`props: ${props}`) })() ||
  <div>
    <Route path="/events/:id?" {...props} render={routeProps => <Editor {...props} {...routeProps} />} />
  </div>
);

export default App;
