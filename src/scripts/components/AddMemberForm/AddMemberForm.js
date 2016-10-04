import React, { Component } from 'react';
import { ActionButton } from '../ActionButton/ActionButton';
import formStyles from './AddMemberForm.styl';

export class AddMemberForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            role: '',
            fruit: '',
            error: false
        };
    }
    submitForm(e) {
        e.preventDefault();

        var formValues = {
            fullName: this.state.name,
            role: this.state.role,
            favoriteFruit: this.state.fruit
        };

        for (let key in formValues) {
            if (!formValues[key]) {
                this.setState({error: 'Please complete all fields.'});
                return;
            }
        }
        if (!this.state.error) {
            this.props.submitCallback(formValues);
            this.resetState();
        }
    }
    resetState() {
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
    resetError() {
        this.setState({error: false});
    }

    render() {
        if (this.props.show || this.props.show === undefined) {
            return (
                <form className="add-member-form">
                    <span className="error">{this.state.error}</span>
                    <div className="bottom-margin input-container">
                        <input value={this.state.name}
                               onChange={(e) => this.updateValue('name', e)}
                               type="text"
                               placeholder="Full name"
                               aria-label="full name"
                               onFocus={this.resetError.bind(this)}/>
                        <input value={this.state.role}
                               onChange={(e) => this.updateValue('role', e)}
                               type="text"
                               placeholder="Role"
                               aria-label="role"
                               onFocus={this.resetError.bind(this)}/>
                        <input value={this.state.fruit}
                               onChange={(e) => this.updateValue('fruit', e)}
                               type="text"
                               placeholder="Favorite fruit"
                               aria-label="favorite fruit"
                               onFocus={this.resetError.bind(this)}/>
                    </div>
                    <ActionButton show="true"
                                  text="Create new member"
                                  type="submit"
                                  action={(e) => this.submitForm(e)}/>
                </form>
            )
        }

        return null;
    }
}