import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGlobal } from '../actions';
import _ from 'lodash';
import { numReformat } from '../utils/utils';

import './styles/Global.css';
import CardItem from './CardItem';
import Loading from './Loading';

class Global extends Component {
	componentDidMount() {
		this.props.fetchGlobal();
	}

	render() {
		const {
			TotalConfirmed,
			TotalDeaths,
			TotalRecovered,
			NewConfirmed,
			NewDeaths,
			NewRecovered,
		} = this.props.globalData;
		if (this.props.loading) return <Loading />;
		return (
			<section className="cards">
				{!_.isEmpty(this.props.globalData) && (
					<>
						<CardItem
							cardTitle="Worldwide"
							dataValue={numReformat(TotalConfirmed)}
							dataTitle="TOTAL CONFIRMED"
							changeValue={numReformat(NewConfirmed)}
							changeClassName={NewConfirmed > 0 ? 'change-negative' : 'change'}
						/>
						<CardItem
							cardTitle="Worldwide"
							dataValue={numReformat(TotalRecovered)}
							dataTitle="TOTAL RECORVERED"
							changeValue={numReformat(NewRecovered)}
							changeClassName={NewRecovered > 0 ? 'change' : 'change-negative'}
						/>
						<CardItem
							cardTitle="Worldwide"
							dataValue={numReformat(TotalDeaths)}
							dataTitle="TOTAL DEATHS"
							changeValue={numReformat(NewDeaths)}
							changeClassName={NewDeaths > 0 ? 'change-negative' : 'change'}
						/>
					</>
				)}
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		globalData: state.global,
		loading: state.async.loading,
	};
};

export default connect(mapStateToProps, { fetchGlobal })(Global);
