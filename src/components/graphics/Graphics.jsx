import React, {Component} from 'react';
import { Chart } from 'react-chartjs-2';

class Graphics extends Component {
    render(){
        return(
            <>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Gráfica</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Compartir</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Exportar</button>
                        </div>
    
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>
                            <span>Esta semana</span>
                        </button>
    
                    </div>
                </div>
    
                <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
            </>
        )
    }

    componentDidMount(){
        (function () {
            'use strict';
            //feather.replace();
            // Graphs
            var ctx = document.getElementById('myChart');
            // eslint-disable-next-line no-unused-vars
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [
                        'Domingo',
                        'Lunes',
                        'Martes',
                        'Miercoles',
                        'Jueves',
                        'Viernes',
                        'Sabado'
                    ],
                    datasets: [{
                            data: [
                                15339,
                                21345,
                                18483,
                                24003,
                                23489,
                                24092,
                                12034
                            ],
                            lineTension: 0,
                            backgroundColor: 'transparent',
                            borderColor: '#007bff',
                            borderWidth: 4,
                            pointBackgroundColor: '#007bff'
                        }]
                },
                options: {
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: false
                                }
                            }]
                    },
                    legend: {
                        display: false
                    }
                }
            });
        })();
        
    }
}

export default Graphics;