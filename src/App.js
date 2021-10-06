import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from './main';
import Home from './home';
// import Web from './web';
import Routes from './routes';
import AOS from "aos";

AOS.init();

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Main>
          <Route exact path="/" component={Home} />
          <Routes />
        </Main>
      </Switch>
    </Router>
  );
}

export default App;
