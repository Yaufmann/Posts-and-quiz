import React from 'react';

const   MySelect = ({options,defaultValue, value, customOnChange}) => {
    return (
        <select
         value={value}
         onChange={event => customOnChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
               <option key={option.value} value={option.value}>
                   {option.name}
               </option>
            )}
        </select>
    );
};

export default MySelect;