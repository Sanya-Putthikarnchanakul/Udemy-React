//packages
import React, { Component } from 'react';

//components
import Aux from '../../hoc/Auxiliary';

export default class BurgerBuilder extends Component{
    render(){
        return (
            <Aux>
                <div>Burger Image</div>
                <div>Build Control</div>
            </Aux>
        );
    }
}