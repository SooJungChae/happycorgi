import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import './assets/css/style.css';

function App() {
  return (
      <BrowserRouter basename={window.location.pathname || ''}>
      {/*<BrowserRouter basename={process.env.PUBLIC_URL}>*/}
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
