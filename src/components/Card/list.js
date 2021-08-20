import React, { useState } from 'react';
import Card from './index';
import styles from './card.module.css'
const CardList = ({ data }) => {
    
    return (
        <>
            <div className={styles.grid}>
                {data &&
                    data.map((card, index) => (
                        <Card
                            key={card.id}
                            src={`report/${card.id}`}
                            title={card.user}
                        >
                            Reporto un indicente cerca de {card.location} <br/>
                            {card.src}
                        </Card>
                    ))
                }



            </div>
        </>
    );
}
export default CardList;