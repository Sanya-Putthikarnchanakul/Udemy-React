//package
import React from 'react';
import PropTypes from 'prop-types';

//css
import classes from './BurgerIngredient.module.css';

export default class BurgerIngredient extends React.Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case ('becon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
};

//เอาไว้ Validate ถ้าเรียกใช้โดยไม่ส่ง props เข้ามาจะ Error
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};