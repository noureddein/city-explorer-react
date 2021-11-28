import React from 'react'
import { Card } from 'react-bootstrap'
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
                        </Card></div>
                    :
                    ''
            }

            </>
        )
    }
}

export default CardText