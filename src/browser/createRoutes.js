import React from 'react';

import App from './app/App.react';
import Home from './home/Page.react';
import NotFound from './notfound/Page.react';
import Othello from './othello/Page.react';
import {IndexRoute, Route} from 'react-router';

export default function createRoutes(getState) {

  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={Othello} path="othello" />
      <Route component={NotFound} path="*" />
    </Route>
  );

}
