import React from 'react';

import './button.scss';

const Button = ({buttonClassName}) => {
    return (
        <button className={buttonClassName}>Click me</button>
    );
}

export default Button;