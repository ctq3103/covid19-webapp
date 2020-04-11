import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHistory, fetchCountries } from '../actions';
import { getDate, getCases } from '../utils/utils';
import CountryDetailChart from '../components/CountryDetailChart';
import CountryDetailData from '../components/CountryDetailData';

class CountryDetail extends Component {
    constructor() {
        super();
        this.state = {
            confirmedDate: [],
            confirmedCases: [],
            recoveredDate: [],
            recoveredCases: [],
            deathsDate: [],
            deathsCases: [],
            selectedCountry: {}
        }
    }

    async componentDidMount() {
        await this.props.fetchHistory(this.props.match.params.countrySlug);
        await this.props.fetchCountries();
        this.getCountryData();
        this.getChartData();    
    }

    getCountryData() {
        const { countries } = this.props;
        const selectedCountry = countries.filter(country => country.Slug === this.props.match.params.countrySlug)[0];
        this.setState({
            selectedCountry: selectedCountry
        })
    }

    getChartData() {
        const { confirmed, recovered, deaths } = this.props.countryHistory;

        let confirmedDate = getDate(confirmed);
        let confirmedCases = getCases(confirmed);
        let recoveredDate = getDate(recovered);
        let recoveredCases = getCases(recovered);
        let deathsDate = getDate(deaths);
        let deathsCases = getCases(deaths);

        this.setState({
            confirmedDate: confirmedDate, 
            confirmedCases: confirmedCases, 
            recoveredDate: recoveredDate,
            recoveredCases: recoveredCases, 
            deathsDate: deathsDate,
            deathsCases: deathsCases,
        });
    }

    render() {
         

        const { confirmedCases, confirmedDate, recoveredCases, recoveredDate, deathsCases, deathsDate } = this.state;


        return (
            <div>
                <CountryDetailData selectedCountry={this.state.selectedCountry}/>
                <CountryDetailChart
                    confirmedDate={confirmedDate} 
                    confirmedCases={confirmedCases} 
                    recoveredDate={recoveredDate}                    recoveredCases={recoveredCases} 
                    deathsDate={deathsDate}
                    deathsCases={deathsCases} />
            </div>
        )    
    }
    
}

const mapStateToProps = (state) => {
    return {
        countryHistory: state.countryHistory,
        countries: state.countries
    }
}

export default connect(mapStateToProps, {fetchHistory, fetchCountries})(CountryDetail);
