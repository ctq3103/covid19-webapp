import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountry } from '../actions';

class CountryDetail extends Component {
    componentDidMount() {
        this.props.fetchCountry(this.props.match.params.countrySlug);
    }

    handleDisplay = () => {
        if(this.props.country.length === 0) {
            return <h1>Not enough data</h1>
        }
        else {
            return (
                <h1> Detail </h1>
            )
        }
    }

    render() {
        console.log(this.props);
        return (
            this.handleDisplay() 
        )  
    }
}

const mapStateToProps = (state) => {
    return {country: state.country}
}

export default connect(mapStateToProps, {fetchCountry})(CountryDetail);