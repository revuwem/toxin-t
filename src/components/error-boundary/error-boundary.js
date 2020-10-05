import React, { Component } from 'react';

export default class ErrorBoundary extends Component{
    constructor(props){
        super(props);

        this.state = {
            error: null,
        };
    }    

    componentDidCatch(error, errorInfo){
        // It would be better log this to special service 
        this.setState({
            error: error,
        });
    }

    render(){
        if(this.state.error){
            return (
                <div>
                    <h2>Oops, this component was crashed down.</h2>
                    <p>Save your work and try to reload page.</p>
                </div>
            );
        }


        return this.props.children;
    }
}