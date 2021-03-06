import React, {Component} from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchLastUpdated } from '../actions';

import './styles/Header.css';


class Header extends Component {
    componentDidMount() {   
        this.props.fetchLastUpdated();
    }

    render() {
        return (
            
            <header className="header">
                <div className="header-left">
                    <h1 className="header-title">Covid-19 Daily Report</h1>

                {this.props.loading === false &&
                <span className="header-subtext">Last Updated On: {moment(this.props.lastUpdated).format('MMMM Do YYYY, h:mm:ss a')}</span>}
                </div>
            </header>

        )
    }
}

const mapStateToProps = state => {
    return { 
      lastUpdated: state.lastUpdated, 
      loading: state.async.loading
    }
  }
  
export default connect(mapStateToProps, {fetchLastUpdated})(Header);
