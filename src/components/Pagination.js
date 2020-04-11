import React from 'react';
import './styles/Pagination.css';

const Pagination = ({ countriesPerPage, countriesLength, paginate }) => {
    const pageNumbers = [];
    
    for (let i=1; i <= Math.ceil(countriesLength / countriesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <div className="pagination-section">
                <ul className="pagination second">
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <span onClick={() => paginate(number)}>{number}</span>
                        </li>
                    ))}               
                </ul>
            </div>
        </nav>
    )
}

export default Pagination;