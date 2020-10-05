
import React, { Component } from 'react';

import './button.scss';

export default class Button extends Component {

    render() {
        const {buttonClassName, type} = this.props;

        return (
            <button className={buttonClassName} type={type}>
                {this.props.children}
            </button>
        );
    }
}


