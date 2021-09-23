import Multimedia from '@components/Multimedia';
import MyMap from '@components/MyMap';
import dateToSpanish from '@module/dateToSpanish';
import { getAlertById } from '@service/AlertServices';
import hacetiempo from '@util/hacetiempo';
import post from 'module/post';

import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button, Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';



const alertbyid = ({ id }) => {
    const { control, handleSubmit, register, formState: { errors } } = useForm();
    const [alert, setAlert] = useState({})
    const [index, setIndex] = useState(0);
    const fullname = `${alert?.usuario?.nombre} ${alert?.usuario?.apellido_paterno} ${alert?.usuario?.apellido_materno}`
    const fulldirection= `${alert?.usuario?.direccion?.direccion}, ${alert?.usuario?.direccion?.distrito},  ${alert?.usuario?.direccion?.provincia}`
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        getAlertById({ id }).then(res => setAlert(res))
    }, [])
    console.log(alert.multimedias)
    const onSubmit = async data => {
        const sendData = {
            "alertaId": id,
            "intitucion_id": data.intitution,
            "titulo": report.user.nombre,
            "nivel": data.level,
            "descripcion": data.description,
            "colaborador_id": "1"
        }
        const res = await post({ src: "notification", data: sendData })
        if (res.status === 201) {
            swal("Datos registrados", "La notificación fue enviada", "success", {
                button: "De acuerdo",
            });
        } else {
            swal("Algo salio mal", "La notificación no fue enviada", "warning", {
                button: "De acuerdo",
            });
        }
    }

    return (
        <>
            <Head>
                <title>Alert {`${id}`}</title>
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
                            <p>{fullname}</p>
                            <h2>Fecha y hora:</h2>
                            <p>{hacetiempo(alert?.created)}, {dateToSpanish(alert?.created)}</p>
                            <h2>Ubicación:</h2>
                            <p>{fulldirection}</p>
                        </article>
                    </Col>
                </Row>

                <Row xs={1} sm={2}>
                    {alert.multimedias &&
                        <Col>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                {alert.multimedias.map((m, index) => (
                                    <Carousel.Item>
                                        <Multimedia
                                            src={m.url}
                                            type={m.tipo}
                                        />
                                        <Carousel.Caption>
                                            {/* <h3>First slide label</h3> */}
                                            <p>Evidencia {`${index + 1}`}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>}
                    <Col>
                        <MyMap
                            title={fullname}
                            longitude={alert?.longitude}
                            latitude={alert?.latitude} />
                    </Col>
                </Row>
            </Container>
            <br />
            <Container >
                <h2>Informar a las autoridades</h2><br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="" xs={1} md={3}>
                        <Form.Group className="mb-3 col-md-12" controlId="formBasicEmail" as={Col}>
                            <Form.Label
                                {...register("description", { required: true })}
                            >Descripción de lo ocurrido</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe una descripción">
                                <Form.Control
                                    type="text"
                                    placeholder="Escribe una descripción"
                                    {...register("description")}
                                    defaultValue={`${fullname} alerto una incidencia en ${fulldirection}`}
                                />
                            </FloatingLabel>
                            <Form.Text className="text-muted">
                                {!errors.description && <>Añade un resumen de la alerta.</>}
                                {errors.description?.type === 'required' && <span className="text-danger">Añade un resumen de la alerta.</span>}
                                {errors.description?.type === 'maxLength' && <span className="text-danger">El resumen debe contener mas de 10 caracteres.</span>}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail" as={Col}>
                            <Form.Label>Nivel de gravedad</Form.Label>
                            <FloatingLabel controlId="floatingSelectGrid" label="Trabaja con selecciones">
                                <select
                                    className="form-select"
                                    aria-label="valores de nivel de gravedad"
                                    {...register("level", { required: true })}>
                                    <option>Abre y seleciona un nivel </option>
                                    <option value="1">Muy leve</option>
                                    <option value="2">Leve</option>
                                    <option value="3">Considerable</option>
                                    <option value="4">Extremo</option>
                                    <option value="5">Muy Extremo</option>
                                </select>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail" as={Col}>
                            <Form.Label>Notificar a una comiaria o intitución </Form.Label>
                            <FloatingLabel controlId="floatingSelectGrid" label="Trabaja con selecciones">
                                <Form.Select aria-label="Comisarias cercanas"
                                    {...register("intitution", { required: true })}>
                                    <option>Abre y seleciona una comisaria </option>
                                    <option value="1">PNP Chepén</option>
                                    <option value="2">PNP Guadalupe</option>
                                    <option value="3">PNP San Jose</option>
                                    <option value="4">PNP Pacasmayo</option>
                                    <option value="5">PNP San Pedro de Lloc</option>
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
export default alertbyid;
export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;
    /* const { query } = params; */
    const SERVER_HOST = process.env.NEXT_PUBLIC_API_PORT

    return {
        props: {
            id
        }
    };
}