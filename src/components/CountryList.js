import React from 'react';
import CountryItem from './CountryItem';


const CountryList = ({countries}) => {
    const countriesList = countries.map(country => (
        <CountryItem country={country}/>
    ))

    return (
        <> {countriesList} </>
    )   
}

export default CountryList;


