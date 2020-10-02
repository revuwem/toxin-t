
import React, { Component } from 'react';

import './button.scss';

export default class Button extends Component {

    render() {
        const {buttonClassName} = this.props;

        return (
            <button className={buttonClassName}>
                {this.props.children}
            </button>
        );
    }
}


