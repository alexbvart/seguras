import Multimedia from '@components/Multimedia';
import MyMap from '@components/MyMap';
import dateToSpanish from '@module/dateToSpanish';
import { getAlertById } from '@service/AlertServices';
import { getNotificationById } from '@service/NotificationServices';
import { getAllMePolice } from '@service/PoliceServices';
import hacetiempo from '@util/hacetiempo';
import post from 'module/post';

import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button, Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
const notification = ({ id}) => {
    const [index, setIndex] = useState(0);

    const [notification, setNotification] = useState({})
    const [police, setPolice] = useState([])
    const colaborador = notification? `${notification?.colaborador?.persona?.nombre} ${notification?.colaborador?.persona?.apellido_paterno} ${notification?.colaborador?.persona?.apellido_materno}`: ""
    const fullname = `${notification.alerta?.usuario?.nombre} ${notification.alerta?.usuario?.apellido_paterno} ${notification.alerta?.usuario?.apellido_materno}`
    const fulldirection = `${notification.alerta?.usuario?.direccion?.direccion}, ${notification.alerta?.usuario?.direccion?.distrito},  ${notification.alerta?.usuario?.direccion?.provincia}`
    

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        getNotificationById({ id }).then(res => setNotification(res))
        getAllMePolice().then(res=>setPolice(res.data.data))
    }, [])

    const { control, handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = async (data) =>{
        console.log("aaa")
        const sendData ={
            "notificacion_id": parseInt(notification?.notificacion_id),
            "efectivo_id": parseInt(data.efectivo_id),
        }
        console.log({sendData})
        
        const res = await post({src:"asignacion", data:sendData}) 
        if(res.status===201||res.status===200){
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
                <Row xs={1} sm={1}>
                    <Col>
                        <article>
                            <h2>{notification?.titulo}</h2>
                            <p>{notification?.descripcion}</p>
                            <h2>Denunciado por:</h2>
                            <p>{fullname}</p>
                            <h2>Cerca a:</h2>
                            <p>{fulldirection}</p>
                            <hr />
                            <h2>Registrada por:</h2>
                            <p>{colaborador}</p>
                            <h2>Notificada a:</h2>
                            <p>{notification?.institucion?.nombre}</p>
                            <h2>Nivel de gravedad:</h2>
                            <p>{notification?.nivel}</p>
                            <h2>Fecha y hora:</h2>
                            <p>{hacetiempo(notification?.alerta?.created)}, {dateToSpanish(notification?.alerta?.created)}</p>
                        </article>
                    </Col>
                </Row>
                <Row>
                    {notification?.alerta?.multimedias &&
                        <Col>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                {notification?.alerta?.multimedias.map((m, index) => (
                                    <Carousel.Item>
                                        <Multimedia
                                            src={m.url}
                                            type={m.tipo}
                                        />
                                        <Carousel.Caption>
                                            <p>Evidencia {index + 1}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>}
                    <Col>
                        <MyMap  
                            title={"Ubicación"} 
                            latitude={notification?.alerta?.latitude} 
                            longitude={notification?.alerta?.longitude} />
                    </Col>
                </Row>
            </Container>
            <br />
            <Container >
                <h2>Informar a un oficial</h2><br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="" xs={1} md={2}>
                        <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail" as={Col}>
                            <Form.Label>Notificar a un oficial de la institución </Form.Label>
                            <FloatingLabel controlId="floatingSelectGrid" label="Abre y seleciona un oficial">
                                <Form.Select aria-label="Oficiales"
                                    {...register("efectivo_id", { required: true })}>
                                    {
                                        police&&police.map(({efectivo_id,persona})=>(
                                            <option key={efectivo_id} value={efectivo_id}>{persona.nombre} {persona.apellido_paterno} {persona.apellido_materno}</option>
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


    return {
        props: {
            id,
        }
    };
}