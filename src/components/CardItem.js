import React from 'react';
import './styles/CardItem.css';

const CardItem = ({cardTitle, dataValue, dataTitle, changeValue, changeClassName}) => {
    return (
        <>
            <div className="card card-colorful">
                    <span className="card-title">
                        {cardTitle}
                    </span>
                    <div className="card-data">
                        <span className="card-number">{dataValue}</span>
                        <span className="card-status">{dataTitle}</span>
                    </div>
                        <span className={changeClassName}>{changeValue} Today</span>
            </div>
        </>
    )
}

export default CardItem;