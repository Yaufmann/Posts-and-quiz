import React, {useState} from 'react';
import classes from "./MyInputSearch.module.css";

const MyInputSearch = ({inputSearch,setInputSearch,setFilter,filter,...props}) => {
    const inputClasses = [classes.search]
    if (inputSearch === true) {
        inputClasses.push(classes.active);
    }
    function clear() {
       setFilter({...filter,query: ""});
    }
    return (
      <div className={inputClasses.join(' ')} onClick={()=>setInputSearch(!inputSearch)}>
        <div className={classes.icon}></div>
        <div className={classes.input}>
            <input onClick={(e)=>e.stopPropagation()}  {...props}/>
        </div>
          <span onClick={clear} className={classes.clear}></span>
      </div>
    );
};

export default MyInputSearch;