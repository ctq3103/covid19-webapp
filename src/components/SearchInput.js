import React from 'react';


const SearchInput = ({searchCountry}) => {
    return (
        <div className="input-group">
            <label htmlFor="countrySearch"></label>
            <input
            aria-label="Search for country"
            title="Search for country"
            className="search-input"
            type="text" 
            id="countrySearch" 
            placeholder="Search for a country"
            onChange={searchCountry}
            >
            </input>
            <span></span>
        </div>
    );
}

export default SearchInput;