import React from 'react';
import classes from './MySelect.module.css';


export const MySelect = ({options, id, defaultValue, onChange}) => {
    return (
        <div className={classes.selectDiv}>
            <select id={id} onChange={onChange} className={classes.select}>
                <option  value="">{defaultValue}</option>
                    {options.map((o,i) => 
                        <option key={i} value={o}>
                            {o}                           
                        </option>
                    )}
            </select>
            <span className={classes.focus}></span>
        </div>
    )
};

export default MySelect;