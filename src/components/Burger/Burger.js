//package
import React from 'react';

//css
import classes from './Burger.module.css';

//component
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_ , i) => {
            return <BurgerIngredient key={key + i} type={key}/>;
        });
    }).reduce((arr , el) => {
        return arr.concat(el);
    } , []);

    if(transformIngredients.length === 0){
        transformIngredients = <p>Please Start Adding Ingredient!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;