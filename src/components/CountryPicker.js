import React from "react";

const CountryPicker = ({countries, handleCountryChange}) => {

    if ( countries.length < 1) {
        return null;
    }

    return (
        <div className="row">
            <div className="col s12 m4 offset-m4">
                <div className="input-field">
                    <select id="countries" className="countries browser-default" onChange={ e => handleCountryChange(e.target.value)}>
                        <option value="global" defaultValue="global">Global</option>
                        {countries && countries.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CountryPicker;
