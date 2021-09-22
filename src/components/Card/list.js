import React, { useEffect, useState } from 'react';
import Card from './index';
import styles from './card.module.css'
import userRepository from 'repository/user';

import { useRouter } from 'next/router'
import SearchBar from '@components/SearchBar/SearchBar';
import hacetiempo from 'util/hacetiempo';

const CardList = ({ data }) => {

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
                            key={card.alerta_id}
                            src={`${redirectionurl}/${card.alerta_id}`}
                            title={card.titulo   || `${card.usuario?.nombre} ${card.usuario?.apellido_paterno} ${card.usuario?.apellido_materno}` }
                        >
                            {card.usuario.direccion && <>
                                Reporto un indicente cerca de {card.usuario.direccion.direccion},  {card.usuario.direccion.distrito}
                                <br/>  {hacetiempo(card.created) }
                            </> }
                            {card.descripcion && <>{card.descripcion}<br/>  {hacetiempo(card.created) }</>}                            
                        </Card>
                    ))
                }
            </div>
        </>
    );
}
export default CardList;