import React from 'react';
import { numReformat } from '../utils/utils';
import { Link } from 'react-router-dom';

const CountryItem = ({country}) => {

    const {Country, CountryCode, TotalConfirmed, TotalDeaths, TotalRecovered } = country;

    return (
        <Link to={`/${country.Slug}`} key={CountryCode}>
        <div style={{border: 'solid 1px black'}} >
            <div className="content">
                <h2>{Country}</h2>
                <p>Total Confirmed: {numReformat(TotalConfirmed)}</p>
                <p>Total Recovered: {numReformat(TotalRecovered)}</p>
                <p>Total Deaths: {numReformat(TotalDeaths)}</p>
                
                
            </div>
        </div>
    </Link>
    )
}

export default CountryItem;


