import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGlobal } from '../actions';
import { numReformat } from './utils';

class Global extends Component {

    componentDidMount() {
        this.props.fetchGlobal();        
    }

    render() {
        const {TotalConfirmed, TotalDeaths, TotalRecovered } = this.props.global;

        return (
            <div>
                <div style={{backgroundColor: 'teal'}}>
                    <div className="content">
                        <h2>Global</h2>
                        <p>Total Confirmed: {numReformat(TotalConfirmed)}</p>
                        <p>Total Recovered: {numReformat(TotalRecovered)}</p>
                        <p>Total Deaths: {numReformat(TotalDeaths)}</p>                                 
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        global: state.global }
}

export default connect(mapStateToProps, { fetchGlobal })(Global);


