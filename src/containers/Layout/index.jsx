import React, {Children, useState} from 'react';
import Header from '../../components/Header';
import {layout,main} from './layout.module.css'

const Layout = ({children}) => {
    return ( 
        <>
            <Header/>
            <div className={layout}>
                <main className={main}>
                    {children}
                </main>
            </div>
        </>
    );
}
export default Layout;