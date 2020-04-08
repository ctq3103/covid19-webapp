import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchGlobal, fetchCountries, setSearchField } from '../actions';

import CountryList from '../components/CountryList';
import Global from '../components/Global';
import SearchInput from '../components/SearchInput';


class HomePage extends Component {

  async componentDidMount() {
    await this.props.fetchCountries();
    this.props.fetchGlobal();   
  }

  render() {
    const { globalData, countries, searchCountry, searchInput } = this.props;

    const getCurrentCountries = countries.filter(
      country =>{ 
            return country.Country.toLowerCase().includes(searchInput.toLowerCase()) 
      }
    );

    return (
      <>
        <Global globalData={globalData}/>
        <SearchInput searchCountry={searchCountry}  />
        <CountryList countries={getCurrentCountries}/>
      </>
    )
  }
}

const mapStateToProps = state => {
  return { 
      globalData: state.global,
      countries: state.countries,
      searchInput: state.searchInput }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGlobal: () => dispatch(fetchGlobal()), 
    fetchCountries: () => dispatch(fetchCountries()), 
    searchCountry: event => dispatch(setSearchField(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

