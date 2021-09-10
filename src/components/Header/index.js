import React, {useState} from 'react';
import HeaderAdmin from './admin'

const TYPES_HEADER = {
    "admin":   <HeaderAdmin />,
    "user-t2": <HeaderControl />,
    "user-t3": <HeaderInstitution />
}

const Header = ({roles="admin"}) => {
    return TYPES_HEADER[roles];
}
export default Header;