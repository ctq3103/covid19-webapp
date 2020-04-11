import React from 'react';
import './styles/Button.css';

const Button = ({buttonAction}) => {
    return (
        <button className="btn-hover color">{buttonAction}</button>
    )
}

export default Button;