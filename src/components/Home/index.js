import React, { Component } from 'react';
import Chart from 'chart.js';
import { Bar, Line } from 'react-chartjs';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const chartData = {
            labels: [
                'Orange',
                'Blue',
            ],
            datasets: [{
                data: [300, 50],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
            },{
                data: [200, 250]
            }]
        };
        const options = {
            responsive: true
        }

        return (
            <div class="barCanvas">
                <Bar
                    data={chartData}
                    options={options}
                />
            </div>
        );
    }
}

export default Home;
