import React from 'react';
import capitalize from './helpers';

const MemeInput = (({name, value, type, handleChange}) => {
    return (
        <>
            <label htmlFor={name}>{capitalize(name)}</label>
            <input 
                id={name} 
                type={type} 
                name={name} 
                placeholder={name} 
                value={value} 
                onChange={handleChange}
            />
        </>
    );
});

export default MemeInput;