import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Details from './components/Details/Details';
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/leagues/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;