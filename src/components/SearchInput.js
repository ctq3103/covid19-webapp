import React from 'react';
import './styles/SearchInput.css';

const SearchInput = ({searchCountry}) => {
    return (
        <div className="search-box">
            <label htmlFor="countrySearch"></label>
            <input
            aria-label="Search for country"
            title="Search for country"
            className="search-box-input"
            type="text" 
            id="countrySearch" 
            placeholder="Search for a country"
            onChange={searchCountry}
            >
            </input>
            <button className="search-box-button">
                <i className="fas fa-search"></i>
	        </button>
        </div>
    );
}

export default SearchInput;