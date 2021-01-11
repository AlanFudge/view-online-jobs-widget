import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const response = { status: 'success', jobs: { pizzathis: 1 } };

class App extends React.Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="loader-outside">
                    <div className="loader-inside" />
                </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));