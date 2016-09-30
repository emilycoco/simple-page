import React, { Component } from 'react';
import styles from './App.styl';
import { DisplayTable } from '../DisplayTable/DisplayTable.js';
// import householdData from './mockData/household.json';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: ['Full Name', 'Description testing', 'Favorite Fruit'],
            // householdData: householdData
        };
    }
    render() {
        return (
            <div className="app">
                <header>I am the header</header>
                <div className="content-container">
                    <h1>Your Household</h1>
                    <h3>Welcome to the marketplace! Review your household below.</h3>
                    <DisplayTable header={this.state.header}></DisplayTable>
                </div>
                <footer>I am the footer</footer>
            </div>
        )
    }
}