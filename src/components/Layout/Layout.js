//packages
import React from 'react';

//components
import Aux from '../../hoc/Auxiliary';

//css
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Side Drawer and Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;