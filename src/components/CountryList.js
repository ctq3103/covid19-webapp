import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCountries, setSearchField } from '../actions';
import SearchInput from './SearchInput';
import './styles/CountryList.css';
import Countries from './Countries';
import Loading from './Loading';

class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            countriesPerPage: 30
        };
    }

    componentDidMount() {
        this.props.fetchCountries();       
    }

    setCurrentPage = (number) => {
        this.setState({currentPage:number});
      };
    
    
    render() {
        const {countries, searchCountry, searchInput, loading } = this.props;
        const { currentPage, countriesPerPage } = this.state;

        //filter countries for search 
        const totalCountries = countries.filter(
            country =>{ 
                return country.Country.toLowerCase().includes(searchInput.toLowerCase()) 
            }
          );

        //Get current countries on page
        const indexOfLastCountry = currentPage * countriesPerPage;
        const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
        const currentCountries = totalCountries.slice(indexOfFirstCountry, indexOfLastCountry); 

        const paginate = (pageNumber) => this.setCurrentPage(pageNumber);
        
        if (loading) return <Loading />
        return (
            <section className="countries-cards">
                <div className="card-columns">
                    <h2 className="countries-cards-title"> 
                        Total Cases By Countries
                    </h2>
                    <SearchInput searchCountry={searchCountry} />
                </div>
                <Countries 
                    searchInput={searchInput}
                    currentCountries={currentCountries}
                    countriesPerPage={countriesPerPage} 
                    countriesLength={countries.length}
                    paginate={paginate}
                    />
            </section> 
        ) 
    }  
}

const mapStateToProps = state => {
    return {
        countries: state.countries,
        searchInput: state.searchInput,
        loading: state.async.loading }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchCountries: () => dispatch(fetchCountries()), 
      searchCountry: event => dispatch(setSearchField(event.target.value)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);


