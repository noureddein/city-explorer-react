import React from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
class CardText extends React.Component {

    render() {
        return (
            <>{
                this.props.cityInfo ?
                    <div><Card className="card">
                        <Card.Body>City Name: {this.props.cityInfo.display_name}</Card.Body>
                    </Card>
                        <Card className="card">
                            <Card.Body>Latitude: {this.props.cityInfo.lat}</Card.Body>
                        </Card>
                        <Card className="card">
                            <Card.Body>Longitude: {this.props.cityInfo.lon}</Card.Body>
                        </Card>
                        <Container>
                            <Row>
                                <Col xs={10} md={10} style={{ margin: 'auto' }}>
                                    <Image
                                        src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_ACCESS_TOKEN}&center=${this.props.cityInfo.lat},${this.props.cityInfo.lon}&zoom=10`}
                                        thumbnail />
                                </Col>
                            </Row>
                        </Container></div>
                    :
                    ''
            }



            </>
        )
    }
}

export default CardText