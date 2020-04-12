import React from 'react';
import './styles/Loading.css';

const Loading = () => {
    return (
        <div className="spinner-container"> 
        <div>
            <div className="dbl-spinner"></div>
            <div className="dbl-spinner dbl-spinner--2"></div>
          </div>
        </div>
    )
}

export default Loading;