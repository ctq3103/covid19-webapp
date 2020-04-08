import React from 'react';
import _ from 'lodash';
import { numReformat } from '../utils/utils';

const Global = ({globalData}) => {

    const {TotalConfirmed, TotalDeaths, TotalRecovered } = globalData;

    return (
        <div>
        {! _.isEmpty(globalData) &&
            <div style={{backgroundColor: 'teal'}}>
                <div className="content">
                    <h2>Global</h2>
                    <p>Total Confirmed: {numReformat(TotalConfirmed)}</p>
                    <p>Total Recovered: {numReformat(TotalRecovered)}</p>
                    <p>Total Deaths: {numReformat(TotalDeaths)}</p>                                 
                </div>
            </div>
        }
        </div>
    )
}

export default Global;


