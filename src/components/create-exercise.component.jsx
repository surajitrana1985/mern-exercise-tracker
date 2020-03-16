import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

class CreateExercise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        };
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.API_URI = 'http://localhost:5000';
    }

    componentDidMount() {
        axios.get(`${this.API_URI}/users`)
            .then(response => {
                if (response && response.data && response.data.length) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    });
                }
            })
            .catch(error => console.log(`Error in fetching users`))
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        console.log(e.target);
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: Number(this.state.duration),
            date: this.state.date
        };
        axios.post(`${this.API_URI}/exercises/add`, exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(`Failed to add user ${err}`));
        window.location = '/';
    }

    render() {
        return (
            <div className="mt-20">
                <h3 className="mb-20">Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit} autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="username-select">Username:</label>
                        <select ref="userInput" id="username-select"
                            className="browser-default custom-select form-control"
                            required value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {this.state.users.map(user => {
                                return <option key={user} value={user}>{user}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" id="description"
                            className="form-control" value={this.state.description}
                            onChange={this.onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Duration (in minutes):</label>
                        <input type="text" name="duration" id="duration"
                            className="form-control" value={this.state.duration}
                            onChange={this.onChangeDuration} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <div>
                            <DatePicker id="date" name="date" selected={this.state.date}
                                onChange={this.onChangeDate} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }

}

export default CreateExercise;