import React from 'react';
import { Cards, CountryPicker, Chart, Loader, Logo } from './components';
import {getCardsData, getCountriesData, getChartData} from "./API";
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {

    state = {
        country: '',
        countries: '',
        charts: '',
        loading: true,
        data: {}
    }

    componentDidMount = async () => {
        const data = await getCardsData();
        this.setState({data});

        const countries = await getCountriesData();
        this.setState({countries});

        const charts = await getChartData();
        this.setState({charts});

        setTimeout(() => {
            this.setState({loading: false});
        }, 1500);
    }

    handleCountryChange = async (country) => {

        if (country === 'global') {
            window.location.reload();
        }
        this.setState({loading: true});
        const data = await getCardsData(country);
        this.setState({data, country, charts: data});

        setTimeout(() => {
            this.setState({loading: false});
        }, 1500);
    }

    render() {
        return (

            <section className={(this.state.loading) ? "corona-app loading" : "corona-app"}>
                <Logo />
                {this.state.loading && <Loader />}
                <div className="container">
                    <Cards data={this.state.data} />
                    <CountryPicker countries={this.state.countries}  handleCountryChange={this.handleCountryChange} />
                    <Chart data={this.state.charts} country={this.state.country} />
                </div>
            </section>
        )
    };
}

export default App;
