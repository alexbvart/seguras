import React, { useState } from 'react';
import Head from 'next/head'
import { Button, Col, Container, FloatingLabel, Form, Row, Tab, Tabs } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { createPerson } from '@service/PersonServices';
import { createUser } from '@service/UserServices';
import { createCollaborator } from '@service/CollaboratorServices';

const Monitor = () => {

    const { control, handleSubmit, register, formState: { errors } } = useForm();
    const onSubmitPerson = async (dataPerson) => {
    }
    const onSubmitUser = async (dataUser,e) => {
        await enterData(dataUser)
        await e.target.reset(); // reset after form submit
    }
    const enterData = async (data)=>{
        const resPerson       = await createPerson({ "data": data });
        const resUser         = await createUser({ "data": data });
        const resCollaborator = await createCollaborator({ persona_id: resPerson.data.data.id, usuario_id: resUser.data.data.usuario_id })
        if (resCollaborator.status === 200) {
            swal("Datos registrados", "El personal de monitoreo fue registrado", "success", {
                button: "De acuerdo",
            });
        } else {
            swal("Algo salio mal", "El personal de monitoreo no fue registrado", "warning", {
                button: "De acuerdo",
            });
        }
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
                    Registra personal de monitoreo
                </h1>
                <br />
                <Tabs defaultActiveKey="persona" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="persona" title="Datos personales">
                        <h2>Introduzca los datos personales</h2><br />
                        <form onSubmit={handleSubmit(onSubmitPerson)}>
                            <Row className="" xs={1} sm={3}>
                                <Form.Group className="mb-3 " controlId="formBasicEmail" as={Col}>
                                    <Form.Label>Nombre</Form.Label>
                                    <FloatingLabel controlId="Nombre" label="Escribe su nombre">
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            {...register("nombre", { required: true })}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.nombre && <>Escriba su nombre</>}
                                        {errors.nombre?.type === 'required' && <span className="text-danger">El nombre es obligatorio</span>}
                                        {errors.nombre?.type === 'maxLength' && <span className="text-danger">El nombre es obligatorio debe contener mas de 10 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="formBasicEmail" as={Col}>
                                    <Form.Label>Apellido Paterno</Form.Label>
                                    <FloatingLabel controlId="Paterno" label="Escribe su apellido_paterno">
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            {...register("apellido_paterno", { required: true })}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.apellido_paterno && <>Escriba su apellido_paterno</>}
                                        {errors.apellido_paterno?.type === 'required' && <span className="text-danger">El apellido_paterno es obligatorio</span>}
                                        {errors.apellido_paterno?.type === 'maxLength' && <span className="text-danger">El apellido_paterno es obligatorio debe contener mas de 10 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="formBasicEmail" as={Col}>
                                    <Form.Label>Apellido Materno</Form.Label>
                                    <FloatingLabel controlId="apellido_materno" label="Escribe su apellido_materno">
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            {...register("apellido_materno", { required: true })}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.apellido_materno && <>Escriba su apellido_materno</>}
                                        {errors.apellido_materno?.type === 'required' && <span className="text-danger">El apellido_materno es obligatorio</span>}
                                        {errors.apellido_materno?.type === 'maxLength' && <span className="text-danger">El apellido_materno es obligatorio debe contener mas de 10 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="telefono" as={Col}>
                                    <Form.Label>Telefono</Form.Label>
                                    <FloatingLabel controlId="telefono" label="Escribe su telefono">
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            {...register("telefono", { required: true })}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.telefono && <>Escriba su telefono</>}
                                        {errors.telefono?.type === 'required' && <span className="text-danger">El telefono es obligatorio</span>}
                                        {errors.telefono?.type === 'maxLength' && <span className="text-danger">El telefono es obligatorio debe contener mas de 10 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="dni" as={Col}>
                                    <Form.Label>D.N.I.</Form.Label>
                                    <FloatingLabel controlId="floatingInputGriddni" label="Escribe su dni">
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            {...register("dni", { required: true })}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.dni && <>Escriba su dni</>}
                                        {errors.dni?.type === 'required' && <span className="text-danger">El dni es obligatorio</span>}
                                        {errors.dni?.type === 'maxLength' && <span className="text-danger">El dni es obligatorio debe contener mas de 10 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="provincia" as={Col}>
                                    <Form.Label>Provincia</Form.Label>
                                    <FloatingLabel controlId="floatingInputGridprovincia" label="Escribe su provincia">
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            {...register("provincia", { required: true })}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.provincia && <>Escriba su provincia</>}
                                        {errors.provincia?.type === 'required' && <span className="text-danger">El campo provincia es obligatorio</span>}
                                        {errors.provincia?.type === 'maxLength' && <span className="text-danger">El campo provincia es obligatorio debe contener mas de 10 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="distrito" as={Col}>
                                    <Form.Label>Distrito</Form.Label>
                                    <FloatingLabel controlId="floatingInputGriddistrito" label="Escribe su distrito">
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            {...register("distrito", { required: true })}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.distrito && <>Escriba su distrito</>}
                                        {errors.distrito?.type === 'required' && <span className="text-danger">El campo distrito es obligatorio</span>}
                                        {errors.distrito?.type === 'maxLength' && <span className="text-danger">El campo distrito es obligatorio debe contener mas de 10 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="formBasicEmail" as={Col}>
                                    <Form.Label>Dirección</Form.Label>
                                    <FloatingLabel controlId="floatingInputGrid" label="Escribe su direccion">
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            {...register("direccion", { required: true })}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.direccion && <>Escriba su direccion</>}
                                        {errors.direccion?.type === 'required' && <span className="text-danger">El campo dirección es obligatorio</span>}
                                        {errors.direccion?.type === 'maxLength' && <span className="text-danger">El campo dirección es obligatorio debe contener mas de 10 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="referencia" as={Col}>
                                    <Form.Label>Referencia</Form.Label>
                                    <FloatingLabel controlId="floatingInputGridreferencia" label="Escribe su referencia">
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            {...register("referencia")}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.referencia && <>Escriba su referencia</>}
                                        {errors.referencia?.type === 'required' && <span className="text-danger">El campo referencia es obligatorio</span>}
                                        {errors.referencia?.type === 'maxLength' && <span className="text-danger">El campo referencia es obligatorio debe contener mas de 10 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>
                            </Row>
                            {/* <Button variant="primary" type="submit">
                                Continuar con los datos de usuario
                            </Button> */}
                        </form>
                    </Tab>
                    <Tab eventKey="user" title="Datos de usuario">
                        <h2>Introduzca datos de usuario</h2><br />
                        <form onSubmit={handleSubmit(onSubmitUser)}>
                            <Row className="" xs={1}>
                                <Form.Group className="mb-3 col-md-12" controlId="formBasicusername" as={Col}>
                                    <Form.Label>Nombre de usuario</Form.Label>
                                    <FloatingLabel controlId="Correo" label="Escriba su correo electronico">
                                        <Form.Control
                                            type="text"
                                            placeholder="Escriba su nombre de usuario"
                                            {...register("username", { required: true , minLength: 10})}
                                            defaultValue={``}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.username && <>Escriba su correo</>}
                                        {errors.username?.type === 'required' && <span className="text-danger">El Nombre de usuario es obligatorio</span>}
                                        {errors.username?.type === 'minLength' && <span className="text-danger">El Nombre de usuario es obligatorio debe contener mas de 8 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword" as={Col}>
                                    <Form.Label>Contraseña</Form.Label>
                                    <FloatingLabel controlId="password" label="Escribe su contraseña">
                                        <Form.Control
                                            type="password"
                                            placeholder=""
                                            {...register("password", { required: true , minLength:108})}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.password && <>Escriba su contraseña</>}
                                        {errors.password?.type === 'required' && <span className="text-danger">El contraseña es obligatorio</span>}
                                        {errors.password?.type === 'minLength' && <span className="text-danger">El contraseña es obligatorio debe contener mas de 8 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                Terminar el registro
                            </Button>
                        </form>
                    </Tab>
                </Tabs>

            </Container>
        </>
    );
}

export default Monitor;