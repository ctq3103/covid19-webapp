import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../actions';
import { Link } from 'react-router-dom';

class Countries extends Component {
    componentDidMount() {
        this.props.fetchCountries();
        
    }

    render() {
        
        return this.props.countries.map(country => {
            return (
                <Link to={`/${country.Slug}`}>
                <div style={{border: 'solid 1px black'}} key={country.CountryCode}>
                    <div className="content">
                        <h2>{country.Country}</h2>
                        <p>Total Confirmed: {country.TotalConfirmed}</p>
                        <p>Total Deaths: {country.TotalDeaths}</p>
                        <p>Total Recovered: {country.TotalRecovered}</p>
                        
                    </div>
                </div>
            </Link>
            )
        })
    }
}

const mapStateToProps = state => {
    return {countries: state.countries}
}

export default connect(mapStateToProps, { fetchCountries })(Countries);


