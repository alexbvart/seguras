import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { Button, Col, Container, FloatingLabel, Form, Row, Tab, Tabs } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { createPerson } from '@service/PersonServices';
import { createUser } from '@service/UserServices';
import { getRoles } from '@service/RoleServices';
import { createCollaborator } from '@service/CollaboratorServices';

const Monitor = () => {

    const { control, handleSubmit, register, formState: { errors } } = useForm();
    const [roles, setRoles] = useState([])


    useEffect(() => {
        getRoles().then(res => setRoles(res.data))
    }, [])
    console.log(roles)
    const onSubmitPerson = async (dataPerson) => {
    }
    const onSubmitUser = async (dataUser,e) => {
        await enterData(dataUser)
        await e.target.reset(); // reset after form submit
    }
    const enterData = async (data)=>{
        const resUser         = await createUser({ "data": data });
        if (resUser.status === 200) {
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
                    Registra usuarios
                </h1>
                <br />
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
                                            {...register("password", { required: true , minLength:8})}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {!errors.password && <>Escriba su contraseña</>}
                                        {errors.password?.type === 'required' && <span className="text-danger">El contraseña es obligatorio</span>}
                                        {errors.password?.type === 'minLength' && <span className="text-danger">El contraseña es obligatorio debe contener mas de 8 caracteres.</span>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword" as={Col}>
                                    <Form.Label>Tipo de usuario</Form.Label>
                                    <FloatingLabel controlId="password" label="">
                                        <Form.Check
                                            inline
                                            label="Intitución"
                                            name="roles"
                                            type="checkbox"
                                            value="4"
                                            id={`checkboxtype`}
                                            {...register("roles", { required: true})}
                                        />
                                        <Form.Check
                                            inline
                                            label="Control"
                                            name="roles"
                                            type="checkbox"
                                            value="3"
                                            id={`checkboxtype2`}
                                            {...register("roles", { required: true})}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        {errors.roles?.type === 'required' && <span className="text-danger">Selcione un tipo</span>}
                                    </Form.Text>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                Terminar el registro
                            </Button>
                        </form>

            </Container>
        </>
    );
}

export default Monitor;