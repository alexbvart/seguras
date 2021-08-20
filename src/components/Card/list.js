import React, { useEffect, useState } from 'react';
import Card from './index';
import styles from './card.module.css'
import userRepository from 'repository/user';

import { useRouter } from 'next/router'

const CardList = ({ data }) => {
    const role = "user-ii"
    const [linkurl, setLinkurl] = useState("report")
    const router = useRouter()
    useEffect(() => {
        const getRole= async()=>{
            let ur = await userRepository()
                .then(res => {
                    return res[role]
                })
            if(ur) setLinkurl(ur.link)
        }
        getRole()
        return () => {
        }
    }, [])

    
    console.log(router);

    const redirectionurl= router.asPath
    return (
        <>
            <div className={styles.grid}>
                {data &&
                    data.map((card, index) => (
                        <Card
                            key={card.id}
                            src={`${redirectionurl}/${card.id}`}
                            title={card.titulo || card.user.nombre}
                        >
                            {card.location && <>
                                Reporto un indicente cerca de {card.location} <br/> {card.src}
                            </> }
                            {card.descripcion && <>{card.descripcion}</>}                            
                        </Card>
                    ))
                }



            </div>
        </>
    );
}
export default CardList;