import React from 'react';
import './JobList.css';

import Job from "./Job.js";

export default class JobList extends React.Component {
    render() {
        return (
            <div className="job-list">
                <div className="jobs-container">
                    <ul className="jobs">
                        {
                            Object.keys(this.props.response.jobs).map(job => {
                                return <Job jobName={job} amount={this.props.response.jobs[job]} />
                            })
                        }
                    </ul>
                </div>
                <h4>{this.props.response.lastUpdated.toISOString()}</h4>
            </div>
        )
    }
}