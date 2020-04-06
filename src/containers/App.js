import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import CountryDetail from '../components/CountryDetail';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/:countrySlug" component={CountryDetail}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
