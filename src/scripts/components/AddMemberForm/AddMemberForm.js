import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ActionButton } from '../ActionButton/ActionButton';
import { FormInput } from '../FormInput/FormInput';
import formStyles from './AddMemberForm.styl';

export class AddMemberForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: {
                value: '',
                valid: true,
                error: 'Please add a name.',
                placeholder: 'Full name',
                id: 'fullName'
            },
            role: {
                value: '',
                valid: true,
                error: 'Please add a role.',
                placeholder: 'Role',
                id: 'role'
            },
            favoriteFruit: {
                value: '',
                valid: true,
                error: 'Please add a fruit.',
                placeholder: 'Favorite fruit',
                id: 'favoriteFruit'
            },
            error: {
                error: false,
                errorMsg: '',
                errorId: null
            }
        };
    }
    submitForm(e) {
        e.preventDefault();

        let formValues = {
            fullName: null,
            role: null,
            favoriteFruit: null
        };

        for (let key in formValues) {
            let field = this.state[key];
            if (!this.checkField(key)) {
                let error = this.state.error;
                error.error = true;
                error.errorMsg = field.error;
                error.errorId = field.id;

                this.setState({error: error});

                return;
            } else {
                formValues[key] = this.state[key].value;
            }
        }
        if (!this.state.error.error) {
            this.props.submitCallback(formValues);
            this.resetState();
        }
    }
    resetState() {
        this.setState((previousState) => {
            let fullName = previousState.fullName;
            fullName.value = '';
            let role = previousState.role;
            role.value = '';
            let favoriteFruit = previousState.favoriteFruit;
            favoriteFruit.value = '';
            return {
                fullName: fullName,
                role: role,
                favoriteFruit: favoriteFruit
            }
        });
    }
    updateValue(fieldId, e) {
        let field = this.state[fieldId];
        field.value = e.target.value;
        this.setState({fieldId: field});
    }
    resetField(fieldId) {
        let field = this.state[fieldId];
        let error = this.state.error;
        error.error = false;
        field.valid = true;
        this.setState({
            error: error,
            fieldId: field
        });
    }
    checkField(fieldId) {
        let field = this.state[fieldId];
        field.valid = !!field.value;
        this.setState({
            fieldId: field
        });

        return field.valid;
    }
    focusOnEl(elId) {
        if (elId) {
            try {
                ReactDOM.findDOMNode(this.refs[elId]).focus();
                this.resetField(elId);
            } catch(err) {
                return;
            }
        }
    }

    render() {
        if (this.props.show || this.props.show === undefined) {
            return (
                <form className="add-member-form">
                    {!this.state.error.error ? null :
                        <span role="alertdialog"
                              aria-labelledby="error-btn">
                            <button
                                id="error-btn"
                                onClick={() => this.focusOnEl(this.state.error.errorId)}>
                                {this.state.error.errorMsg}</button>
                        </span>}
                    <div className={!this.state.error.error ? 'bottom-margin input-container no-error' :'bottom-margin input-container'}>
                        <FormInput input={this.state.fullName}
                                   updateValue={(fieldId, e) => this.updateValue(fieldId, e)}
                                   resetField={(fieldId) => this.resetField(fieldId)}
                                   checkField={(fieldId) => this.checkField(fieldId)}
                                   ref="fullName"/>
                        <FormInput input={this.state.role}
                                   updateValue={(fieldId, e) => this.updateValue(fieldId, e)}
                                   resetField={(fieldId) => this.resetField(fieldId)}
                                   checkField={(fieldId) => this.checkField(fieldId)}
                                   ref="role"/>
                        <FormInput input={this.state.favoriteFruit}
                                   updateValue={(fieldId, e) => this.updateValue(fieldId, e)}
                                   resetField={(fieldId) => this.resetField(fieldId)}
                                   checkField={(fieldId) => this.checkField(fieldId)}
                                   ref="favoriteFruit"/>
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