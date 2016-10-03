import React, { Component } from 'react';
import styles from './ActionButton.styl';

export class ActionButton extends Component {
    render() {
        if (this.props.show || this.props.show === undefined) {
            return (
                <button className={this.props.class || 'action-btn'} onClick={this.props.action}>{this.props.text}</button>
            )
        }

        return null;
    }
}