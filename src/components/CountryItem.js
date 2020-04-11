import React from 'react';
import { numReformat } from '../utils/utils';
import { Link } from 'react-router-dom';
import './styles/CountryItem.css';


const CountryItem = ({country}) => {

    const {Country, Slug, CountryCode, TotalConfirmed, NewConfirmed } = country;

    return (
        <Link 
            to={`/${Slug}`} 
            key={CountryCode}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card card-columns">
                <div className="card-column">
                    <span className="country-name">
                    {Country}
                    </span>
                    <span className="total-cases">
                    {numReformat(TotalConfirmed)}
                    </span>
                </div>
                <div className="card-column">
                    <span>
                    <img alt={CountryCode} className="country-flag" src={`https://www.countryflags.io/${CountryCode.toLowerCase()}/shiny/64.png`} />
                    </span>
                    <span className={ NewConfirmed > 0 ? "change-negative" : "change"}>
                    {numReformat(NewConfirmed)} Today
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default CountryItem;