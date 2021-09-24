import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { Button, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import post from 'module/post';
import SearchBar from '@components/SearchBar/SearchBar';
import { getAllMePolice } from '@service/PoliceServices';



const Police = () => {
    const [keywordFilter, setKeywordFilter] = useState('')
    const [police, setPolice] = useState([])


    useEffect(() => {
        getAllMePolice().then(res=>setPolice(res.data.data))

    }, [])

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
                        {(police && police.length > 0) &&
                            police
                                .filter(item => String(item.dni).toUpperCase().includes(keywordFilter.toUpperCase()) || String(item.user?.nombre).toUpperCase().includes(keywordFilter.toUpperCase()))
                                .map((p, index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{`${p.persona.nombre} ${p.persona.apellido_paterno} ${p.persona.apellido_materno}` }</td>
                                        <td>{p.persona.dni}</td>
                                        <td>{p.persona.telefono}</td>
                                    </tr>
                                ))
                        }

                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default Police;

export async function getServerSideProps(context) {
    const { params } = context;
    const SERVER_HOST = process.env.NEXT_PUBLIC_API_PORT

    return {
        props: {
        }
    };
}