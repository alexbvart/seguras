import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { Button, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import {getAllCollaborator} from '@service/CollaboratorServices'
import {getAllUser} from '@service/UserServices'
import SearchBar from '@components/SearchBar/SearchBar';



const Monitor = () => {
    const [keywordFilter, setKeywordFilter] = useState('')
    const [user, setUser] = useState([])
    const handleOnSubmit = (keyword) => {
        setKeywordFilter(keyword)
        console.log("padre", keyword)
    }
    useEffect(() => {
        getAllUser().then(res=>setUser(res.data))
    }, [])
    console.log({user})
    
    return (
        <>
            <Head>
                <title>Registra personal de monitoreo</title>
                <meta name="description" content="This application is only for monitoring personnel." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Container >
                <h1 className="title">
                    Lista del personal de monitoreo
                </h1>
                <br />
                <SearchBar handleOnSubmit={handleOnSubmit} />
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre de ususrio</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(user && user.length > 0) &&
                            user
                                .filter(item => String(item.dni).toUpperCase().includes(keywordFilter.toUpperCase()) || String(item.user?.nombre).toUpperCase().includes(keywordFilter.toUpperCase()))
                                .map((m, index) => (
                                    <tr>
                                        <td>{index}</td>
                                        <td>{m.username}</td>
                                        <td>{m.estado ? "Activo" : "Inactivo"}</td>
                                    </tr>
                                ))
                        }

                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default Monitor;

export async function getServerSideProps(context) {
    const { params } = context;
    const SERVER_HOST = process.env.NEXT_PUBLIC_API_PORT
    
    return {
        props: {
        }
    };
}