import React from 'react';
import './styles/Countries.css';
import CountryItem from './CountryItem';
import Pagination from './Pagination';

const Countries = ({currentCountries, countriesPerPage, countriesLength, paginate, searchInput}) => {
    return (
        <>
            <div className="cards">
                {currentCountries.map(country => (
                <CountryItem country={country}/>
            ))}
            </div>
            {(!searchInput) &&
            <Pagination
                countriesPerPage={countriesPerPage} 
                countriesLength={countriesLength}
                paginate={paginate} />}
        </>
    )
} 

export default Countries;