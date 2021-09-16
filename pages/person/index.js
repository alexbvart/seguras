import getAll from 'module/getAll';
import React, {useEffect, useState} from 'react';
const Person = () => {
    useEffect(() => {
        const res = getAll({src:"persona"}).then(console.log(res))
    }, [])
    
    return ( 
        <>
            
        </>
    );
}
export default Person;