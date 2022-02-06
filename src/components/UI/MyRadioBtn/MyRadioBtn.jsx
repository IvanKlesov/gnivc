import React from 'react';
import classes from './MyRadioBtn.module.css'

const MyRadioBtn = (props) => {
    return (
        <div className={classes.myRadioBtnWrapper}>
            <div>
                <input type='radio' id='male' value='male' name='genus' onChange={props.onChange} className={classes.myRadioBtn} />
                <label htmlFor='male'>Мужской</label>
            </div>
            <div>
                <input type='radio' id='female' value='female' name='genus' onChange={props.onChange} className={classes.myRadioBtn} />
                <label htmlFor='female'>Женский</label>
            </div>
            <div>
                <input type='radio' id='average' value='average' name='genus' onChange={props.onChange} className={classes.myRadioBtn} />
                <label htmlFor='average'>Средний</label>
            </div>     
        </div>
    )
}

export default MyRadioBtn;