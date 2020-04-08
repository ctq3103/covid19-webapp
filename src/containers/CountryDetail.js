import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHistory } from '../actions';
import { getDate, getCases } from '../components/utils';
import CountryChart from '../components/CountryChart';

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
            isLoading: true
        }
    }

    async componentDidMount() {
        await this.props.fetchHistory(this.props.match.params.countrySlug);
        this.getChartData();       
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
            isLoading: false
        });
    }

    render() {
        console.log('Detail:', this.state);
        const { confirmedCases, confirmedDate, recoveredCases, recoveredDate, deathsCases, deathsDate, isLoading } = this.state;

        if (confirmedCases.length === 0
            && confirmedDate.length === 0
            && recoveredCases.length === 0
            && recoveredDate.length === 0
            && deathsCases.length === 0
            && deathsDate.length === 0 
            && isLoading === false) {
                return <h1>Sorry, we do not have data of this country</h1>
            }
        
        return (
            <div>
                <CountryChart 
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
        countryHistory: state.countryHistory
    }
}

export default connect(mapStateToProps, {fetchHistory})(CountryDetail);
