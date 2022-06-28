import React from 'react';
import ReactApexChart from 'react-apexcharts'
import './staticChart.scss';


class StaticChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "STOCK ABC",
                data: [1,2,3,4,5,6,7,8,9]
            }],
            options: {
                chart: {
                    type: 'area',
                    height: 350,
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },

                title: {
                    text: 'Fundamental Analysis of Stocks',
                    align: 'left'
                },
                subtitle: {
                    text: 'Price Movements',
                    align: 'left'
                },
                labels: ['a','b','c'],
                xaxis: {
                    type: 'datetime',
                },
                yaxis: {
                    opposite: true
                },
                legend: {
                    horizontalAlign: 'left'
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        )
    }
}
export default StaticChart;
