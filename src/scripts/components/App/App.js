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
    logout() {

        // Fake logout method
        alert('You are now logged out.')
    }
    render() {
        return (
            <div className="app">
                <header className="content-container" role="banner">
                    <span>The Marketplace</span>
                    <ActionButton class="link-btn logout-btn" text="Logout" action={this.logout.bind(this)} />
                </header>
                <div className="content-container" role="main">
                    <h1 className="bottom-margin top-margin">Your Household</h1>
                    <h3>Welcome to the marketplace! Review your household below.</h3>
                    <div className="table-container">
                        <DisplayTable columns={this.state.tableColumns} rows={this.state.members} />
                    </div>
                    <AddMemberForm show={this.state.showForm} submitCallback={this.addMember.bind(this)}/>
                    <ActionButton show={!this.state.showForm} text="Add new member" action={this.toggleForm.bind(this)} />
                </div>
                <footer className="content-container top-margin">The Marketplace is a work in progress</footer>
            </div>
        )
    }
}