import React, { Component } from 'react';
import formInputStyles from './FormInput.styl';

export class FormInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input
                value={this.props.input.value}
                className={this.props.input.valid ? 'form-input' : 'form-input inputError'}
                onChange={(e) => this.props.updateValue(this.props.input.id, e)}
                type="text"
                placeholder={this.props.input.placeholder}
                aria-label={this.props.input.placeholder}
                aria-required="true"
                aria-invalid={!this.props.input.valid}
                onFocus={() => this.props.resetField(this.props.input.id)}
                onBlur={() => this.props.checkField(this.props.input.id)}
            />
        )
    }
}