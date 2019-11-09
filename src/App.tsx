import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Top from './Top';
import About from './About';
import ContactForm from './ContactForm';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Top} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactForm} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
