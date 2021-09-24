import React, { useState } from 'react';
import Head from 'next/head'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { useRouter } from 'next/router';
import { loginUserHelper } from 'helper/UserHelper';
import { login } from 'module/auth';


const Login = () => {
    const router = useRouter()
    const { control, handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const sendData = loginUserHelper({ "data": data })
        const res = await login({ src: "login", data: sendData })
        if (res.code === "OK") {
            await localStorage.setItem("@token", res.token)
            await localStorage.setItem("@usuario", JSON.stringify(res.usuario))
            let role = res.usuario.roles[0]
            if (role.nombre === "user-t2")
                router.push("/alert")
            if (role.nombre === "user-ii")
                router.push("/notification/institution")
            if (role.nombre === "admin")
                router.push("/")
        } else {
            swal("Mensaje", res.message, "error", {
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
                        <Form.Group className="mb-3 col-md-12" controlId="formBasicusername" as={Col}>
                            <Form.Label>Correo Electronico</Form.Label>
                            <FloatingLabel controlId="floatingInputGriduser" label="Escriba su correo electronico">
                                <Form.Control
                                    type="text"
                                    placeholder="Escriba su nombre de usuario"
                                    {...register("username", { required: true })}
                                    defaultValue={``}
                                />
                            </FloatingLabel>
                            <Form.Text className="text-muted">
                                {!errors.username && <>Escriba su correo</>}
                                {errors.username?.type === 'required' && <span className="text-danger">El correo es obligatorio</span>}
                                {errors.username?.type === 'maxLength' && <span className="text-danger">El correo es obligatorio debe contener mas de 10 caracteres.</span>}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword" as={Col}>
                            <Form.Label>Contraseña</Form.Label>
                            <FloatingLabel controlId="floatingInputGridpassword" label="Escribe su contraseña">
                                <Form.Control
                                    type="password"
                                    placeholder=""
                                    {...register("password", { required: true })}
                                />
                            </FloatingLabel>
                            <Form.Text className="text-muted">
                                {!errors.password && <>Escriba su contraseña</>}
                                {errors.password?.type === 'required' && <span className="text-danger">El correo es obligatorio</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-danger">El correo es obligatorio debe contener mas de 10 caracteres.</span>}
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