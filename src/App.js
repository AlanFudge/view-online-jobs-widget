import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';

import Loading from './components/Loading';
import JobList from './components/JobList';

const response = {
    status: 'success',
    jobs: {
        police: 11,
        unemployed: 20,
        dynasty: 3,
        taxi: 2,
        lawyer: 2,
        ambulance: 1,
        ron: 6,
        mecano: 4,
        pizzathis: 4,
        gopostal: 1
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        if (process.env.NODE_ENV == 'development') {
            setTimeout(() => {
                response.lastUpdated = new Date();
                this.setState(response);
            }, 5000);
        } else {
            const serverId = window.location.href.match(/(?<=\?server=)\w*/);
            if (serverId) {
                const getNewJobs = () => {
                    axios.get("http://localhost:4000/api/" + serverId).then((response) => {
                        if (response.data.status == "success") {
                            response.data.lastUpdated = new Date();
                            this.setState(response.data)
                        }
                    });
                }
                getNewJobs();

                setInterval(getNewJobs, 15000);
            }
        }
    }

    render() {
        return (
            this.state.status == "success" ? <JobList response={this.state} /> : <Loading />
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));