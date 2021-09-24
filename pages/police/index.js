import React, { useState } from 'react';
import Head from 'next/head'
import { Button, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import post from 'module/post';
import SearchBar from '@components/SearchBar/SearchBar';
import { getAllInstitutions } from '@service/InstitutionServices';



const Police = () => {
    const [keywordFilter, setKeywordFilter] = useState('')
    const [police, setPolice] = useState([])
    const [institution, setInstitution] = useState([])


    useEffect(() => {
        getAllInstitutions().then(res=>setInstitution(res.data))
    }, [])
    console.log(institution)

    const handleOnSubmit = (keyword) => {
        setKeywordFilter(keyword)
        console.log("padre", keyword)
    }
    useEffect(() => {
        getAllPolice().then(res=>setPolice(res.data))
    }, [])
    console.log(police)
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
                                        <td>{index}</td>
                                        <td>{`${p.name} ${p.apellido_paterno} ${p.apellido_materno}` }</td>
                                        <td>{p.dni}</td>
                                        <td>{p.telephone}</td>
                                        <td>{`${p.direccion}, ${p.distrito}`}</td>
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