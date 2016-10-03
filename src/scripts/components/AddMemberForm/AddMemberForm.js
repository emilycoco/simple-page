import React, { Component } from 'react';
import styles from './AddMemberForm.styl';
import { ActionButton } from '../ActionButton/ActionButton';

export class AddMemberForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            role: '',
            fruit: ''
        };
    }
    submitForm(e) {
        e.preventDefault();

        var formValues = {
            fullName: this.state.name,
            role: this.state.role,
            favoriteFruit: this.state.fruit
        };

        this.props.submitCallback(formValues);
        this.setState({
            name: '',
            role: '',
            fruit: ''
        });

    }
    updateValue(key, e) {
        var newState = {};
        newState[key] = e.target.value;
        this.setState(newState);
    }

    render() {
        if (this.props.show || this.props.show === undefined) {
            return (
                <form className="add-member-form">
                    <div className="bottom-margin input-container">
                        <input value={this.state.name} onChange={(e) => this.updateValue('name', e)} type="text" placeholder="Full name"/>
                        <input value={this.state.role} onChange={(e) => this.updateValue('role', e)} type="text" placeholder="Role"/>
                        <input value={this.state.fruit} onChange={(e) => this.updateValue('fruit', e)} type="text" placeholder="Favorite fruit"/>
                    </div>
                    <ActionButton show="true" text="Create new member" type="submit" action={(e) => this.submitForm(e)}/>
                </form>
            )
        }

        return null;
    }
}