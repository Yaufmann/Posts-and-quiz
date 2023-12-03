import React from 'react';
import classes from './MyInput.module.css';

const MyImput = (props) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};

export default MyImput;