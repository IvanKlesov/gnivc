import React from 'react';
import classes from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <input id={props.id} placeholder={props.placeholder} onChange={props.onChange} className={classes.myInput} {...props} />
    )
}

export default MyInput;