import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import HomePage from './HomePage';
import CountryDetails from './CountryDetails';

import './styles/App.css';

const App = () => {

    return (
      <div className="container">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:countrySlug" component={CountryDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    )

}


export default App;

