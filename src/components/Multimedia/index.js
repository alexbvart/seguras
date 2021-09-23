import React, {useState} from 'react';
import {full_space} from './styles.module.css'
const Multimedia = ({type,src}) => {

    const SRC_URL = process.env.NEXT_PUBLIC_SRC_AWS
    const source =  `${SRC_URL}/${src}`
    const TYPES_MULTIMEDIA = {
        "video": <video  src={source} autoplay loop controls/>,
        "imagen": <img src={source} alt={type}/>,
        "audio": <audio src={source} autoplay loop controls/>
    }
    return ( 
        <>
            <div className={full_space}>
                {TYPES_MULTIMEDIA[type]}
            </div>
        </>
    );
}
export default Multimedia;