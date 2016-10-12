import React, { Component } from 'react';
import { DisplayTable } from '../DisplayTable/DisplayTable';
import { AddMemberForm } from '../AddMemberForm/AddMemberForm';
import { ActionButton } from '../ActionButton/ActionButton';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import HouseHold from '../../mockData/HouseHold';
import appStyles from './App.styl';

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
                <Header/>
                <div className="content-container" role="main">
                    <h1 className="bottom-margin top-margin">Your Household</h1>
                    <h3>Welcome to the marketplace! Review your household below.</h3>
                    <div className="table-container">
                        <DisplayTable columns={this.state.tableColumns} rows={this.state.members} />
                    </div>
                    <AddMemberForm show={this.state.showForm} submitCallback={(member) => this.addMember(member)}/>
                    <ActionButton show={!this.state.showForm} text="Add new member" action={() => this.toggleForm()} />
                </div>
                <Footer/>
            </div>
        )
    }
}
