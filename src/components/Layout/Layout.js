import React from 'react';
import Aux from '../../hoc/Auxillary';
import styles from './Layout.module.css'

//AUX allows adjacent JSX elements to exist next to each other

const layout = (props) => (
    <Aux> 
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.Content}>
        {props.children}
    </main>
</Aux>
)


export default layout;