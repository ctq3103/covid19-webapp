import React from 'react';
import _ from 'lodash';
import { numReformat } from '../utils/utils';
import './styles/Global.css';
import CardItem from './CardItem';


const CountriesDetailData = ({selectedCountry}) => {

    const {Country, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered } = selectedCountry;
 
    return (
        <section className="cards">
            {!(_.isEmpty(selectedCountry)) &&
            <>
                    <CardItem 
                        cardTitle={Country}
                        dataValue={numReformat(TotalConfirmed)}
                        dataTitle='TOTAL CONFIRMED'
                        changeValue={numReformat(NewConfirmed)}
                        changeClassName={NewConfirmed > 0 ? "change-negative" : "change"}
                    />
                    <CardItem 
                        cardTitle={Country}
                        dataValue={numReformat(TotalRecovered)}
                        dataTitle='TOTAL RECOVERED'
                        changeValue={numReformat(NewRecovered)}
                        changeClassName={NewRecovered > 0 ? "change" : "change-negative"}
                    />
                    <CardItem 
                        cardTitle={Country}
                        dataValue={numReformat(TotalDeaths)}
                        dataTitle='TOTAL DEATHS'
                        changeValue={numReformat(NewDeaths)}
                        changeClassName={NewDeaths > 0 ? "change-negative" : "change"}
                    />
            </>
            }
            </section>
                )
}

export default CountriesDetailData;


