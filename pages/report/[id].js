import MyMap from '@components/MyMap';

import Head from 'next/head';
import React from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useForm } from 'react-hook-form';
const reports = ({ id, report }) => {

    const { control, handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Head>
                <title>Report {`${id}`}</title>
                <meta name="description" content="Application monitoring platform secure" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <h1 className="title">
                Alerta #{`${id}`}
            </h1>
            <br />
            <Container >
                <Row xs={1} sm={2}>
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
                <Row>
                    <MyMap />
                </Row>
            </Container>

            <br />
            <Container >
                <h2>Informar a las autoridades</h2><br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="" xs={1} sm={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
                            <Form.Label
                                {...register("description", { required: true, maxLength: 80 })}
                            >Descripción de lo ocurrido</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe una descripción">
                                <Form.Control type="text" placeholder="Escribe una descripción" {...register("description")} />
                            </FloatingLabel>
                            <Form.Text className="text-muted">
                                {!errors.description && <>Añade un resumen de la alerta.</>}
                                {errors.description && <span className="text-danger">Añade un resumen de la alerta.</span>}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
                            <Form.Label>Nivel de gravedad</Form.Label>
                            <FloatingLabel controlId="floatingSelectGrid" label="Trabaja con selecciones">
                                <select
                                    className="form-select"
                                    aria-label="valores de nivel de gravedad"
                                    {...register("level", { required: true })}>
                                    <option>Abre y seleciona un nivel </option>
                                    <option value="3">Muy leve</option>
                                    <option value="1">Leve</option>
                                    <option value="2">Considerable</option>
                                    <option value="2">Extremo</option>
                                    <option value="2">Muy Extremo</option>
                                </select>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
                            <Form.Label>Notificar a una comiaria o intitución correspondiente</Form.Label>
                            <FloatingLabel controlId="floatingSelectGrid" label="Trabaja con selecciones">
                                <Form.Select aria-label="Comisarias cercanas"
                                    {...register("intitution", { required: true })}>
                                    <option>Abre y seleciona una comisaria </option>
                                    <option value="3">PNP Chepén</option>
                                    <option value="1">PNP Guadalupe</option>
                                    <option value="2">PNP San Jose</option>
                                    <option value="2">PNP Pacasmayo</option>
                                    <option value="2">PNP San Pedro de Lloc</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                        Notificar
                    </Button>
                </form>
            </Container>
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