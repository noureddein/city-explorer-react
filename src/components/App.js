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
            errMsg: false,
            disErrMsg: '',
        }
        this.handleForm = this.handleForm.bind(this)
        this.resetHandler = this.resetHandler.bind(this)
    }
    async handleForm(event) {
        event.preventDefault()
        const q = event.target.userInput.value
        const key = process.env.REACT_APP_ACCESS_TOKEN
        const format = 'JSON'
        const URL = `https://eu1.locationiq.com/v1/search.php?q=${q}&key=${key}&format=${format}&limit=1`
        axios.get(URL)
            .then(res => {
                if (res.status === 200) {
                    const results = res.data[0]
                    this.setState({
                        errMsg: false,
                        cityInfo: {
                            lon: results.lon,
                            lat: results.lat,
                            display_name: results.display_name,
                        }
                    })
                }
            })
            .catch(err => {
                this.setState({
                    cityInfo: '',
                    errMsg: true,
                    disErrMsg: `Bad Request ${err.status}`
                })
            })
    }

    resetHandler() {
        this.setState({
            cityInfo: '',
            errMsg: false,
            disErrMsg: '',
        })
    }


    render() {
        return (
            <React.Fragment>
                <header>
                    <nav>
                        <p>
                            City Explorer
                        </p>
                    </nav>
                </header>
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
                        <Button variant="primary" type="button" onClick={this.resetHandler} className="m-1">Clear</Button>
                    </Form>
                    <CardText
                        cityInfo={this.state.cityInfo && this.state.cityInfo}
                        errMsg={this.state.errMsg && this.state.disErrMsg}
                    />
                </div>


            </React.Fragment>
        )
    }
}

export default App;