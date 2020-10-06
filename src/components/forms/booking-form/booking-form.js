import { render } from '@testing-library/react';
import React, { Component } from 'react';

import '../../../form.scss';
import './booking-form.scss';

export default class BookingForm extends Component{
    constructor(props){
        super(props);

        this.state={

        };
    }

    render(){
        return(
            <p>BookingForm</p>
        );
    }    
};

