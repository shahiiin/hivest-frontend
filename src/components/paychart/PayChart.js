import React from 'react';
import './style.scss';
import ReactApexChart from 'react-apexcharts'
import { Col, Container, Row } from 'react-bootstrap';



class PayChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [44, 55, 13, 33],
            options: {
                plotOptions: {
                    pie: {
                        customScale: 1.1,

                    }
                },
                chart: {
                    type: 'donut',
                    offsetX: 2,
                    offsetY: -20,

                },
                stroke: {
                    show: false,

                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false,
                },
                responsive: [{
                    breakpoint: undefined,
                    options: {
                        
                    },
                }]
            },
        };
    }


    appendData() {
        var arr = this.state.series.slice()
        arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)

        this.setState({
            series: arr
        })
    }

    removeData() {
        if (this.state.series.length === 1) return

        var arr = this.state.series.slice()
        arr.pop()

        this.setState({
            series: arr
        })
    }

    randomize() {
        this.setState({
            series: this.state.series.map(function () {
                return Math.floor(Math.random() * (100 - 1 + 1)) + 1
            })
        })
    }

    reset() {
        this.setState({
            series: [44, 55, 13, 33]
        })
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="chart-wrap">
                            <div id="pay-chart">
                                <ReactApexChart className='pay-chart' options={this.state.options}
                                    series={this.state.series} type="donut" width={150}  height={150} border-color={'#1a2025'} />
                            </div>


                        </div>
                    </Col>
                </Row>
            </Container>


        );
    }
}
export default PayChart;