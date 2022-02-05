import React from 'react';
import classes from './MyButton.module.css';

export const MyButton = ({children, ...props}) => {
   return (
       <button onClick={props.onClick} className={classes.btn}>{children}</button>
   )
}