import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>Edit</Link> | <a href="/#" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a>
        </td>
    </tr>
);

class ExercisesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises: []
        };
        this.deleteExercise = this.deleteExercise.bind(this);
        this.API_URI = 'http://localhost:5000';
    }

    componentDidMount() {
        axios.get(`${this.API_URI}/exercises`)
            .then(response => {
                if (response && response.data) {
                    this.setState({
                        exercises: response.data
                    });
                }
            })
            .catch(error => console.error(`Error in fetching exercises log ${error}`));
    }

    deleteExercise(id) {
        axios.delete(`${this.API_URI}/exercises/${id}`)
            .then(response => {
                if (response && response.data) {
                    this.setState({
                        exercises: this.state.exercises.filter(exercise => {
                            return exercise._id !== id
                        })
                    });
                }
            })
            .catch(error => console.error(`Error in fetching exercises log ${error}`));
    }

    getExerciseList() {
        return this.state.exercises.map(currentExercise => {
            return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id} />
        });
    }

    render() {
        return (
            <div className="mt-20">
                <h3 className="mb-20">Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getExerciseList()}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ExercisesList;