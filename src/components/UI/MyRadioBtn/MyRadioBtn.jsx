import React from 'react';
import classes from './MyRadioBtn.module.css'

const MyRadioBtn = (props) => {
    return (
        <div className={classes.myRadioBtnWrapper}>
            <div>
                <input type='radio' id='male' value='male' name='genus' onChange={props.onChange} className={classes.myRadioBtn} />
                <label for='male'>Мужской</label>
            </div>
            <div>
                <input type='radio' id='female' value='female' name='genus' onChange={props.onChange} className={classes.myRadioBtn} />
                <label for='female'>Женский</label>
            </div>   
        </div>
    )
}

export default MyRadioBtn;