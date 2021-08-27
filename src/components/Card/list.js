import React, { useEffect, useState } from 'react';
import Card from './index';
import styles from './card.module.css'
import userRepository from 'repository/user';

import { useRouter } from 'next/router'
import SearchBar from '@components/SearchBar/SearchBar';

const CardList = ({ data }) => {

    const [keywordFilter, setKeywordFilter] = useState('')

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

    const handleOnSubmit = (keyword) =>{
        setKeywordFilter(keyword)
        console.log("padre", keyword)
    }
/*     
    console.log(router); */

    const redirectionurl= router.asPath
    return (
        <>
            <SearchBar handleOnSubmit={handleOnSubmit}/>
            <div className={styles.grid}>
                {(data && data.length > 0) &&
                    data
                    .filter(item => String(item.descripcion).toUpperCase().includes(keywordFilter.toUpperCase()) || String(item.user?.nombre).toUpperCase().includes(keywordFilter.toUpperCase()))
                    .map((card, index) => (
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