import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button className={styles.Add} 
                onClick={props.add}>
                    Add
         </button>
        <button className={styles.Remove}
                onClick={props.remove}
                disabled={props.disabled}>
                    Remove
        </button>

    </div>
)

export default buildControl;