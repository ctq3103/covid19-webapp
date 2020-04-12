import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHistory, fetchCountries } from '../actions';
import { getDate, getCases } from '../utils/utils';
import CountryDetailChart from '../components/CountryDetailChart';
import CountryDetailData from '../components/CountryDetailData';
import Button from '../components/Button';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

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
         const {confirmed, recovered, deaths} = this.props.countryHistory;

        const { confirmedCases, confirmedDate, recoveredCases, recoveredDate, deathsCases, deathsDate } = this.state;

        console.log(this.props);

        if (this.props.loading) return <Loading />
        return (
            <div>
                
                <CountryDetailData selectedCountry={this.state.selectedCountry}/>
                <CountryDetailChart
                    confirmed={confirmed}
                    deaths={deaths}
                    recovered={recovered}
                    confirmedDate={confirmedDate} 
                    confirmedCases={confirmedCases} 
                    recoveredDate={recoveredDate}                    
                    recoveredCases={recoveredCases} 
                    deathsDate={deathsDate}
                    deathsCases={deathsCases} />
                <Link to={"/"} style={{ textDecoration: 'none' }}><Button buttonAction="Back To Homepage" /></Link>
            </div>
        )    
    }
    
}

const mapStateToProps = (state) => {
    return {
        countryHistory: state.countryHistory,
        countries: state.countries,
        loading: state.async.loading
    }
}

export default connect(mapStateToProps, {fetchHistory, fetchCountries})(CountryDetail);
