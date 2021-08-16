import MyMap from 'components/MyMap';
import Head from 'next/head';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
const reports = ({ id, report }) => {
    return (
        <>
            <Head>
                <title>Report {`${id}`}</title>
                <meta name="description" content="Application monitoring platform secure" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <h1 className="title">
                Incidencia #{`${id}`}
            </h1>
            <Container>
                <Row>
                    <Col>
                        <article>
                            <h2>Registrada por:</h2>
                            <p>{report.user}</p>
                            <h2>Fecha y hora:</h2>
                            <p>{report.user}</p>
                            <h2>Ubicación:</h2>
                            <p>{report.location}</p>
                        </article>
                    </Col>
                    <Col>
                        <Image src={report.multimedia} fluid />
                    </Col>

                </Row>
            </Container>


            <MyMap />

        </>
    );
}
export default reports;
export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;


    /* const { query } = params; */
    const SERVER_HOST = "http://localhost:3001";

    const report = await fetch(`${SERVER_HOST}/reports/${id}`)
        .then(res => res.json())

    return {
        props: {
            report,
            id
        }
    };
}