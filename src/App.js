import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = { fname: '', gender: '', pic: '', email: '', city: '', state: '', country: '', phone: '' };

    constructor() {
        super();
        fetch("https://randomuser.me/api/")
            .then((response) => response.json())
            .then((data) => {
                const record = data.results[0];
                this.setState({
                    fname: record.name.first, gender: record.gender, pic: record.picture.large, email: record.email,
                    city: record.location.city, state: record.location.state, country: record.location.country,
                    phone: record.phone
                });
            })
    }
    handleClick = () => {
        fetch("https://randomuser.me/api/")
            .then((response) => response.json())
            .then((data) => {
                const record = data.results[0];
                this.setState({
                    fname: record.name.first, gender: record.gender, pic: record.picture.large, email: record.email,
                    city: record.location.city, state: record.location.state, country: record.location.country,
                    phone: record.phone
                });
            })
    }
    render() {
        return (
            <div className="container">
                <h1>Random User Generator</h1>
                <img src={ this.state.pic } alt={ this.state.fname } id="pic" /> <br />
                    Name : { this.state.fname } <br />
                    Gender : { this.state.gender }<br />
                    Email: { this.state.email } <br />
                    Phone: {this.state.phone }<br />
                    City: { this.state.city } <br />
                    State: { this.state.state }<br />
                    Country: { this.state.country } <br />
                <input type="button" value="Refresh" onClick={ this.handleClick } id="btn" />
            </div>
        );
    }
}

export default App;