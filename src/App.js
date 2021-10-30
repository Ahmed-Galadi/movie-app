import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/home';
import moviesDetails from './components/moviesDetails/moviesDetails';
import pageNotFound from './components/pageNotFound/pageNotFound';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="app">
      <Router>
        <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie/:imdbID" component={moviesDetails} />
              <Route component={pageNotFound} />
            </Switch>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
