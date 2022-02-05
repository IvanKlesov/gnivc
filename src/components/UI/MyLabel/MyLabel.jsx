import React from 'react';
import classes from './MyLabel.module.css';

export const Label = ({name, ...props}) => {
    return (
        <label htmlFor={name} className={classes.label}>
            {props.children}
        </label>
    )
};