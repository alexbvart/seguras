import React, { useState } from 'react';
import Head from 'next/head'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


const Login = () => {
    const { control, handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = async data =>{
        const sendData ={
            "password": data.data,
            "email": data.email,
        }
        const res = await post({src:"notification", data:sendData})
        if(res.status===201){
            swal("Datos registrados", "La notificación fue enviada", "success", {
                button: "De acuerdo",
            });
        }else{
            swal("Algo salio mal", "La notificación no fue enviada", "warning", {
                button: "De acuerdo",
            });
        }
    } 

    return (
        <>
            <Head>
                <title>log in to Secure</title>
                <meta name="description" content="This application is only for monitoring personnel." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

    
            <h1 className="title">
                Inicio de sesión
            </h1>
            <br />
    
            <Container >
                <h2>Introduzca sus datos</h2><br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="" xs={1}>
                        <Form.Group className="mb-3 col-md-12" controlId="formBasicEmail" as={Col}>
                            <Form.Label>Correo Electronico</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escriba su correo electronico">
                                <Form.Control 
                                    type="email" 
                                    placeholder="Escriba su coreo" 
                                    {...register("email")} 
                                    defaultValue={`@gmail.com`}
                                />
                            </FloatingLabel>
                            <Form.Text className="text-muted">
                                {!errors.email && <>Escriba su correo</>}
                                {errors.email?.type === 'required' && <span className="text-danger">El correo es obligatorio</span>}
                                {errors.email?.type === 'maxLength' && <span className="text-danger">El correo es obligatorio debe contener mas de 10 caracteres.</span>}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 col-md-12" controlId="formBasicEmail" as={Col}>
                            <Form.Label>Contraseña</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe su contraseña">
                                <Form.Control 
                                    type="password" 
                                    placeholder="" 
                                    {...register("password")} 
                                    defaultValue={``}
                                />
                            </FloatingLabel>
                            <Form.Text className="text-muted">
                                {!errors.email && <>Escriba su contraseña</>}
                                {errors.email?.type === 'required' && <span className="text-danger">El correo es obligatorio</span>}
                                {errors.email?.type === 'maxLength' && <span className="text-danger">El correo es obligatorio debe contener mas de 10 caracteres.</span>}
                            </Form.Text>
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                        Iniciar sesión
                    </Button>
                </form>
            </Container>
        </>
    );
}

export default Login;