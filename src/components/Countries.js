import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../actions';
import { Link } from 'react-router-dom';
import { numReformat } from './utils';

class Countries extends Component {
    componentDidMount() {
        this.props.fetchCountries();

    }

    render() {
        console.log(this.props);
        return this.props.countries.map(country => {
            return (
                <Link to={`/${country.Slug}`} key={country.CountryCode}>
                <div style={{border: 'solid 1px black'}} >
                    <div className="content">
                        <h2>{country.Country}</h2>
                        <p>Total Confirmed: {numReformat(country.TotalConfirmed)}</p>
                        <p>Total Recovered: {numReformat(country.TotalRecovered)}</p>
                        <p>Total Deaths: {numReformat(country.TotalDeaths)}</p>
                        
                        
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


