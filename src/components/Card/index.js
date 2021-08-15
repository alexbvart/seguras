import React, { useState } from 'react';
import styles from './card.module.css'
import Link from 'next/link'


const Card = ({ title, children, src }) => {
    return (
        <>
            <Link href={src}>
                <a
                    className={styles.card}
                >
                    <h2>{title} &rarr;</h2>
                    {children}
                </a>
            </Link>
        </>
    );
}
export default Card;