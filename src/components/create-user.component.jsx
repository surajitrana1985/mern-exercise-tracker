import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.API_URI = 'http://localhost:5000/users';
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username
        };
        axios.post(`${this.API_URI}/add`, user)
            .then(res => console.log(res.data))
            .catch(err => console.log(`Failed to add user ${err}`));
        this.setState({
            username: ''
        });
    }

    render() {
        return (
            <div className="mt-20">
                <h3 className="mb-20">Create New User</h3>
                <form onSubmit={this.onSubmit} autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username"
                            className="form-control" value={this.state.username}
                            onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }

}

export default CreateUser;