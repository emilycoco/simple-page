import React, { Component } from 'react';
import { ActionButton } from '../ActionButton/ActionButton';
import headerStyles from './Header.styl';

export class Header extends Component {
    logout() {

        // Fake logout method
        alert('You are now logged out.')
    }
    render() {
        return (
            <header className="header content-container" role="banner">
                <span>The Marketplace</span>
                <ActionButton class="link-btn logout-btn" text="Logout" action={this.logout.bind(this)} />
            </header>
        )
    }
}
