import React from "react";
import CountUp from 'react-countup';

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {

    if (!confirmed) {
        return null
    }

    return (
        <div className="row">
            <div className="col s12 m4">
                <div className="card orange darken-4 center">
                    <div className="card-content white-text">
                        <h6 className="card-title">Infected</h6>
                        <h2 className="card-counts"><CountUp start={0} end={confirmed.value} duration={2.75} separator="," /></h2>
                        <h6 className="card-date">{new Date(lastUpdate).toDateString()}</h6>
                        <p className="card-description">Number of active cases of COVIS-19</p>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div className="card green darken-4 center">
                    <div className="card-content white-text">
                        <h6 className="card-title">Recovered</h6>
                        <h2 className="card-counts"><CountUp start={0} end={recovered.value} duration={2.75} separator="," /></h2>
                        <h6 className="card-date">{new Date(lastUpdate).toDateString()}</h6>
                        <p className="card-description">Number of recoveries cases of COVIS-19</p>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div className="card red darken-4 center">
                    <div className="card-content white-text">
                        <h6 className="card-title">Deaths</h6>
                        <h2 className="card-counts"><CountUp start={0} end={deaths.value} duration={2.75} separator="," /></h2>
                        <h6 className="card-date">{new Date(lastUpdate).toDateString()}</h6>
                        <p className="card-description">Number of deaths cases of COVIS-19</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
