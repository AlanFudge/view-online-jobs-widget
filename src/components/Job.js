import React from 'react';
import './Job.css';

export default class Job extends React.Component {
    render() {
        return (
            <li className="job">{ `${this.props.jobName}: ${this.props.amount}` }</li>
        )
    }
}