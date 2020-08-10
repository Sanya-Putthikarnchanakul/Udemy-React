//packages
import React, { Component } from 'react';

//components
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            becon: 1,
            cheese: 0,
            meat: 0           
        }
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Control</div>
            </Aux>
        );
    }
}