import React, { useState } from 'react';
import Head from 'next/head'
import { Button, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import post from '@services/post';
import SearchBar from '@components/SearchBar/SearchBar';



const Monitor = ({ monitor }) => {
    const [keywordFilter, setKeywordFilter] = useState('')

    const handleOnSubmit = (keyword) => {
        setKeywordFilter(keyword)
        console.log("padre", keyword)
    }

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
                        {(monitor && monitor.length > 0) &&
                            monitor
                                .filter(item => String(item.dni).toUpperCase().includes(keywordFilter.toUpperCase()) || String(item.user?.nombre).toUpperCase().includes(keywordFilter.toUpperCase()))
                                .map((m, index) => (
                                    <tr>
                                        <td>{index}</td>
                                        <td>{m.fullname}</td>
                                        <td>{m.dni}</td>
                                        <td>{m.telephone}</td>
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