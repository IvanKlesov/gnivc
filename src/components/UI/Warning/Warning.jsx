import React from 'react';
import classes from './Warning.module.css';

export const Warning = ({children, name}) => {    
        switch(name) {
            case 'text': return <div className={classes.warningText}>{children}</div>;
            case 'radio': return <div className={classes.warningRadioBtn}>{children}</div>;
            case 'select': return <div className={classes.warningSelect}>{children}</div>;
            default: return <></>;
        }    

};