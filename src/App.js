import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'Pages/Home';
import Contact from 'Pages/Contact';
import About from 'Pages/About';
import './styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
