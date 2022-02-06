import React from 'react';
import classes from './AnswerInput.module.css';

const AnswerInput = React.forwardRef((props, ref) =>  (
        <input  placeholder={props.placeholder} ref={ref} readOnly={props.readOnly}  className={classes.AnswerInput} {...props} />
    )
)

export default AnswerInput;