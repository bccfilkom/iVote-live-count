import React, { Component } from 'react';
import './home.css';
import { Pie, Bar } from 'react-chartjs-2';
import { Grid, Button, Header } from 'semantic-ui-react';


class Home extends Component {
    render() {
        const data = {
            labels: [
                'Orange',
                'Blue'
            ],
            datasets: [{
                data: [300, 50],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)'
                ]
            }]
        };
        const data2  = {
            labels: [
                'Orange',
                'Blue',
                'Belum Memilih'
            ],
            datasets: [{
                data: [300, 250, 150],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(201, 203, 207, 0.8)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(201, 203, 207, 1)'
                ],
                label: 'Jumlah Suara Masuk'
            }]
        }
        const data3  = {
            labels: [
                'Orange',
                'Blue'
            ],
            datasets: [{
                data: [300, 250],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                label: 'Kelas A'
            },{
                data: [330, 280],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                label: 'Kelas B'
            },{
                data: [100, 133],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                label: 'Kelas C'
            },{
                data: [330, 260],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                label: 'Kelas D'
            }]
        }
        
        const options = {
            responsive: !false
        }
        return (
            <div>
                <Grid columns={2}>
                    <Grid.Column>
                        <Header as='h2'>Persentase Vote</Header>
                        <Pie data={data} options={options}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2'>Jumlah Suara Masuk</Header>
                        <Bar data={data2} options={options}/>
                    </Grid.Column>
                </Grid>

                <Grid columns={1}>
                    <Grid.Column>
                        <Bar data={data3} options={options}/>
                    </Grid.Column>
                </Grid>
            </div>      
        );
    }
}

export default Home;
