import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { Button, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import {getAllCollaborator} from '@service/CollaboratorServices'
import SearchBar from '@components/SearchBar/SearchBar';



const Monitor = ({ monitor }) => {
    const [keywordFilter, setKeywordFilter] = useState('')
    const [monitore, setMonitore] = useState([])
    const handleOnSubmit = (keyword) => {
        setKeywordFilter(keyword)
        console.log("padre", keyword)
    }
    useEffect(() => {
        getAllCollaborator().then(res=>setMonitore(res.data))
    }, [])
    console.log({monitore})
    
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
                            <th>Nombre y apellidos</th>
                            <th>D.N.I.</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(monitore && monitore.length > 0) &&
                            monitore
                                .filter(item => String(item.dni).toUpperCase().includes(keywordFilter.toUpperCase()) || String(item.user?.nombre).toUpperCase().includes(keywordFilter.toUpperCase()))
                                .map((m, index) => (
                                    <tr>
                                        <td>{index}</td>
                                        <td>{`${m.persona?.nombre?.toUpperCase()} ${m.persona?.apellido_paterno?.toUpperCase()} ${m.persona?.apellido_materno?.toUpperCase()}`} </td>
                                        <td>{m.persona?.dni}</td>
                                        <td>{m.persona?.telefono}</td>
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
    let monitor = []
    try {
        monitor = await fetch(`${SERVER_HOST}/monitor/`)
        monitor = await monitor.json()
    }
    catch (e) {
        console.log(e)
    }
    return {
        props: {
            monitor: monitor,
        }
    };
}