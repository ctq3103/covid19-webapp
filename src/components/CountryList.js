import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, fetchGlobal } from '../actions';

class CountryList extends Component {
    componentDidMount() {
        this.props.fetchCountries();
        this.props.fetchGlobal();
        
    }


    renderList() {
        return this.props.countries.map(country => {
            return (
                <div style={{border: 'solid 1px black'}} key={country.CountryCode}>
                    <div className="content">
                        <h2>{country.Country}</h2>
                        <p>Total Confirmed: {country.TotalConfirmed}</p>
                        <p>Total Deaths: {country.TotalDeaths}</p>
                        <p>Total Recovered: {country.TotalRecovered}</p>
                        
                    </div>
                </div>
            )
        })
    }

    render() {

        return (
            <div>
                <div style={{backgroundColor: 'teal'}}>
                    <div className="content">
                        <h2>Global</h2>
                        <p>Total Confirmed: {this.props.global.TotalConfirmed}</p>
                        <p>Total Deaths: {this.props.global.TotalDeaths}</p>
                        <p>Total Recovered: {this.props.global.TotalRecovered}</p>                      
                    </div>
                </div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        countries: state.countries,
        global: state.global }
}

export default connect(mapStateToProps, { fetchCountries, fetchGlobal })(CountryList);


