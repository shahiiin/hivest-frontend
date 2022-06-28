import React from 'react';
import ReactApexChart from 'react-apexcharts'
import { Col, Container, Row } from 'react-bootstrap';
import './apexChart.scss';



class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {



            seriesSpark3: [{
                data: [10, 41, 35, 51, 49, 62, 69, 72, 60]
            }],
            optionsSpark3: {
                chart: {
                    type: 'area',
                    width:'50px',
                    height: '80px',
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3
                },
                xaxis: {
                    crosshairs: {
                        width: 1
                    },
                },
                yaxis: {
                    min: 0
                },
                title: {
                    
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                    }
                },
                subtitle: {
                    
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                    }
                }
            },


        };
    }



    render() {
        return (


            <div>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="chart-spark3">
                                        <ReactApexChart options={this.state.optionsSpark3}
                                            series={this.state.seriesSpark3} type="area"
                                             height={this.props.height} width={this.props.width} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
           

                
            </div>
        )
    }

}
export default ApexChart;
