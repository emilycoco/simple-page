import React, { Component } from 'react';
import styles from './App.styl';
import { DisplayTable } from '../DisplayTable/DisplayTable.js';
import { AddMemberForm } from '../AddMemberForm/AddMemberForm';
import { ActionButton } from '../ActionButton/ActionButton';
import HouseHold from '../../../mockData/HouseHold.js';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableColumns: [],
            members: [],
            showForm: false
        };
    }
    componentDidMount() {
        this.getMembers();
    }
    toggleForm() {
        this.setState((previousState) => {
            return {
                showForm: !previousState.showForm
            }
        });
    }
    getMembers() {
        this.setState({

            // Fake get request for member data
            members: HouseHold.get(),
            tableColumns: [
                {
                    title: 'Full Name',
                    key: 'fullName'
                },
                {
                    title: 'Description',
                    key: 'role'
                },
                {
                    title: 'Favorite Fruit',
                    key: 'favoriteFruit'
                }
            ]
        });
    }
    addMember(newMember) {
        this.setState({

            // Fake post request to add member
            members: HouseHold.addMember(newMember),
            showForm: false
        });
    }
    render() {
        return (
            <div className="app">
                <header>
                    <div>The Marketplace</div>
                </header>
                <div className="content-container">
                    <h1 className="bottom-margin">Your Household</h1>
                    <h3 className="bottom-margin">Welcome to the marketplace! Review your household below.</h3>
                    <DisplayTable columns={this.state.tableColumns} rows={this.state.members} />
                    <AddMemberForm show={this.state.showForm} submitCallback={this.addMember.bind(this)}/>
                    <ActionButton show={!this.state.showForm} text="Add new member" action={this.toggleForm.bind(this)} />
                </div>
                <footer>The Marketplace is a work in progress</footer>
            </div>
        )
    }
}