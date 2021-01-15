import React from 'react';
import './Loading.css';

export default class Loading extends React.Component {
    render() {
        return (
            <div className="loader-container">
                <h1>Loading Please Wait...</h1>
                <div className="loader-outside">
                    <div className="loader-inside" />
                </div>
            </div>
        )
    }
}