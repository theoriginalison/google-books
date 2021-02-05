import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import Search from '../src/pages/Search';
import Save from '../src/pages/Save';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search}>
          </Route>
          <Route exact path="/save" component={Save}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
