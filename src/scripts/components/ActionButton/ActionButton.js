import React, { Component } from 'react';
import styles from './ActionButton.styl';

export class ActionButton extends Component {
    render() {
        return (
            <button className={this.props.show ? 'action-button add-member-form' : 'action-button hidden'} onClick={this.props.action}>{this.props.text}</button>
        )
    }
}