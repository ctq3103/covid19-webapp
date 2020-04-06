import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGlobal } from '../actions';

class Global extends Component {
    componentDidMount() {
        this.props.fetchGlobal();
        
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        global: state.global }
}

export default connect(mapStateToProps, { fetchGlobal })(Global);


