import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHistory } from '../actions';


class CountryDetail extends Component {
    
    componentDidMount() {
        this.props.fetchHistory(this.props.match.params.countrySlug);
    }


    render() {
        console.log(this.props)
        return (
            
            <h1> Detail </h1>
        )  
    }
}

const mapStateToProps = (state) => {
    return {
        countryHistory: state.countryHistory
    }
}

export default connect(mapStateToProps, {fetchHistory})(CountryDetail);