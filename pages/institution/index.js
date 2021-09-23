import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { Button, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import SearchBar from '@components/SearchBar/SearchBar';
import { getAllInstitutions } from '@service/InstitutionServices';

const Institution = () => {
    const [keywordFilter, setKeywordFilter] = useState('')
    const [institution, setInstitution] = useState([])
    const handleOnSubmit = (keyword) => {
        setKeywordFilter(keyword)
        console.log("padre", keyword)
    }
    useEffect(() => {
        getAllInstitutions().then(res=>setInstitution(res.data))
    }, [])
    console.log(institution)
    return (
        <>
            <Head>
                <title>Registra personal de Institutiono</title>
                <meta name="description" content="This application is only for monitoring personnel." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Container >
                <h1 className="title">
                    Lista del personal de Institutiono
                </h1>
                <br />
                <SearchBar handleOnSubmit={handleOnSubmit} />
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre de la institucion</th>
                            <th>Nombre y apellidos del responsable</th>
                            <th>Tipo</th>
                            <th>Telefono</th>
                            <th>Email</th>
                            <th>Dirección</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(institution && institution.length > 0) &&
                            institution
                                .filter(item => String(item.dni).toUpperCase().includes(keywordFilter.toUpperCase()) || String(item.user?.nombre).toUpperCase().includes(keywordFilter.toUpperCase()))
                                .map((m, index) => (
                                    <tr>
                                        <td>{index}</td>
                                        <td>{`${m.nombre?.toUpperCase()}`} </td>
                                        <td>{m.persona?.toUpperCase()}</td>
                                        <td>{m.tipo?.toUpperCase()}</td>
                                        <td>{m.telefono}</td>
                                        <td>{m.email}</td>
                                        <td>{`${m.direccion?.direccion}, ${m.direccion?.distrito?.toUpperCase()}`}</td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}
export default Institution;

export async function getServerSideProps(context) {
    const { params } = context;
    return {
        props: {
        }
    };
}