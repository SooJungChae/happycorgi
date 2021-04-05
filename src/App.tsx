import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Navigation from "./components/Navigation";
import './assets/css/style.css';

function App() {
  return (
      <BrowserRouter basename={window.location.pathname || ''}>
      {/*<BrowserRouter basename={process.env.PUBLIC_URL}>*/}
          <Navigation />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
      </BrowserRouter>
  );
}

export default App;
