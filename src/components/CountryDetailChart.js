import React from 'react';
import Plot from "react-plotly.js";

import './styles/CountryDetailChart.css';

const CountryChart = ({ confirmedCases, confirmedDate, recoveredCases, recoveredDate, deathsCases, deathsDate }) => {

    return (
        <div className="chart-container">
        <Plot
            data={[
                {
                    x: confirmedDate,
                    y: confirmedCases,
                    type: "scatter",
                    mode: "lines",
                    name: 'Confirmed Cases',
                    line: {
                        color: "#3498db",
                        width: 3
                    }
                },
                {
                    x: recoveredDate,
                    y: recoveredCases,
                    type: "scatter",
                    mode: "lines",
                    name: 'Recovered Cases',
                    line: {
                        color: "#2ecc71",
                        width: 3
                    }
                },
                {
                    x: deathsDate,
                    y: deathsCases,
                    type: "scatter",
                    mode: "lines",
                    name: 'Deaths Cases',
                    line: {
                        color: "#e74c3c",
                        width: 3
                    }
                }
            ]}
            layout={{
                width: 820,
                height: 520,
                title: "Number of Cases by Status from Day One",
                paper_bgcolor: "rgb(46, 52, 80)",
                plot_bgcolor: "rgb(46, 52, 80)",
                font: {
                    size: 16,
                    color: '#ecf0f1'
                }
            }}
        />
        </div> 
    )
}


export default CountryChart;