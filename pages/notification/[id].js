import MyMap from '@components/MyMap';
import post from 'module/post';

import Head from 'next/head';
import React from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
const notification = ({ id, report,notification,police }) => {

    const { control, handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = async data =>{
        const sendData ={
            "notificacion_id": id,
            "efectivo_id": data.police,
            "estado": "atendido"
        }
        const res = await post({src:"asignacion", data:sendData})
        if(res.status===201){
            swal("Datos registrados", "La asignación fue realizada", "success", {
                button: "De acuerdo",
            });
        }else{
            swal("Algo salio mal", "La asignación no fue realizada", "warning", {
                button: "De acuerdo",
            });
        }
    } 
    return (
        <>
            <Head>
                <title>Notificación {`${id}`}</title>
                <meta name="description" content="Application monitoring platform secure" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <h1 className="title">
                Notificación #{`${id}`}
            </h1>
            <br />
            <Container >
                <Row xs={1} sm={2}>
                    <Col>
                        <article>
                            <h2>Registrada por:</h2>
                            <p>{report.user.nombre}</p>
{/*                             <h2>Fecha y hora:</h2>
                            <p>{report.user}</p> */}
                            <h2>Ubicación:</h2>
                            <p>{report.location}</p>
                        </article>
                    </Col>
                    <Col>
                        <Image src={report.multimedia} fluid />
                    </Col>
                </Row>
                <Row>
                    <MyMap  title={report.user.nombre} />
                </Row>
            </Container>
            <br />
            <Container >
                <h2>Informar a un oficial</h2><br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="" xs={1} md={2}>
                        <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail" as={Col}>
                            <Form.Label
                                {...register("description", { required: true })}
                            >Descripción de lo ocurrido</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe una descripción">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Escribe una descripción" 
                                    {...register("description")} 
                                    defaultValue={`${report.user.nombre} reporto una incidencia en ${report.location}`}
                                />
                            </FloatingLabel>
                            <Form.Text className="text-muted">
                                {!errors.description && <>Añade un resumen de la alerta.</>}
                                {errors.description?.type === 'required' && <span className="text-danger">Añade un resumen de la alerta.</span>}
                                {errors.description?.type === 'maxLength' && <span className="text-danger">El resumen debe contener mas de 10 caracteres.</span>}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail" as={Col}>
                            <Form.Label>Notificar a un oficial de la institución </Form.Label>
                            <FloatingLabel controlId="floatingSelectGrid" label="Abre y seleciona un oficial">
                                <Form.Select aria-label="Oficiales"
                                    {...register("police", { required: true })}>
                                    {
                                        police&&police.map(({id,fullname})=>(
                                            <option value={id}>{fullname}</option>
                                        ))
                                    }
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
export default notification;
export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;
    /* const { query } = params; */
    const SERVER_HOST = process.env.NEXT_PUBLIC_API_PORT

    const notification = await fetch(`${SERVER_HOST}/notification/${id}`)
        .then(res => res.json())

    const {alertaId} = notification
    const report = await fetch(`${SERVER_HOST}/reports/${alertaId}`)
        .then(res => res.json())

    const police = await fetch(`${SERVER_HOST}/efectivo`)
        .then(res => res.json())

    return {
        props: {
            report,
            notification,
            id,
            police
        }
    };
}