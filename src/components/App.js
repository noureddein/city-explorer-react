import React from 'react';
import '../App.css';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import CardText from './CardText';
require('dotenv').config();

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            cityInfo: '',

        }
        this.handleForm = this.handleForm.bind(this)
    }
    handleForm(event) {
        event.preventDefault()
        const q = event.target.userInput.value
        const key = process.env.REACT_APP_ACCESS_TOKEN
        const format = 'JSON'
        const URL = `https://eu1.locationiq.com/v1/search.php?q=${q}&key=${key}&format=${format}&limit=1`
        axios.get(URL)
            .then(res => {
                const results = res.data[0]
                this.setState({
                    cityInfo: {
                        lon: results.lon,
                        lat: results.lat,
                        display_name: results.display_name,
                    }
                })

            }).catch(error => console.log(error))



    }
    render() {
        return (
            <React.Fragment>
                <div className="formContainer">
                    <Form onSubmit={this.handleForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Your City</Form.Label>
                            <Form.Control name="userInput" type="text" placeholder="Enter City Name" />
                            <Form.Text className="text-muted">
                                Hit to Start!.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">Explore!</Button>
                    </Form>

                    <CardText cityInfo={this.state.cityInfo && this.state.cityInfo}
                    />
                </div>


            </React.Fragment>
        )
    }
}

export default App;