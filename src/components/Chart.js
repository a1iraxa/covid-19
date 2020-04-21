import React from "react";
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ data, country}) => {

    if (data < 1) {
        return null;
    }

    let showChart = "";

    if(country) {
        showChart = (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
          );
    }else {
        showChart = (
            <Line
                data={{
                    labels: data.map(({ date }) => date),
                    datasets: [{
                        data: data.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: data.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
          );
    }






    return (
        <div className="row">
            <div className="col s12 m12">
                {showChart}
            </div>
        </div>
    );
};

export default Chart;
