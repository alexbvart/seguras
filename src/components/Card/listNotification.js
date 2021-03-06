import React, { useEffect, useState } from 'react';
import Card from './index';
import styles from './card.module.css'
import userRepository from 'repository/user';

import { useRouter } from 'next/router'
import SearchBar from '@components/SearchBar/SearchBar';
import hacetiempo from 'util/hacetiempo';

const CardListNotification = ({ data }) => {

    const [keywordFilter, setKeywordFilter] = useState('')

    const role = "user-ii"
    const [linkurl, setLinkurl] = useState("alert")
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

    const handleOnSubmit = (keyword) =>{
        setKeywordFilter(keyword)
        console.log("padre", keyword)
    }

    const redirectionurl= router.asPath

    
    return (
        <>
            <SearchBar handleOnSubmit={handleOnSubmit}/>
            <div className={styles.grid}>
                {(data && data.length > 0) &&
                    data
                    .filter(item => String(item.descripcion).toUpperCase().includes(keywordFilter.toUpperCase()) || String(item.usuario?.nombre).toUpperCase().includes(keywordFilter.toUpperCase()) || String(item.user?.nombre).toUpperCase().includes(keywordFilter.toUpperCase()))
                    .map((card, index) => (
                        <Card
                            key={card.notificacion_id}
                            src={`${card.notificacion_id}`}
                            title={card.titulo}
                        >
                            {card.descripcion && <>{card.descripcion}<br/>  {hacetiempo(card.created) }</>}                            
                        </Card>
                    ))
                }
            </div>
        </>
    );
}
export default CardListNotification;