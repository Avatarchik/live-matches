// @flow

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Matches from './Pages/Matches';

const Instructions = React.lazy(() => import('./Pages/Instructions'));

const App = () => {
  return (
    <div>
      <Router basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Matches} />
            <Route
              path="/instructions/index.html"
              exact
              component={Instructions}
            />
            <Route path="*" component={Matches} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
