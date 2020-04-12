import React from 'react';
import './styles/Button.css';

const Button = ({buttonAction}) => {
    return (
        <div className="button">
        <button className="btn-hover color">{buttonAction}</button>
        </div>
    )
}

export default Button;