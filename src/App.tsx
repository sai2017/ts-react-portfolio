import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Top from './Top';
import About from './About';
import ContactForm from './ContactForm';
import Header from "./components/Header"
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Top} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactForm} />
          {/* Not Found */}
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
