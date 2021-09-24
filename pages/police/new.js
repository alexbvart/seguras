import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import post from 'module/post';
import { getAllInstitutions, getMeInstitution } from '@service/InstitutionServices';
import { createPolice } from '@service/PoliceServices';


const Police = () => {
    const { control, handleSubmit, register, formState: { errors } } = useForm();
    const [me, setMe] = useState([])


    useEffect(() => {
        getMeInstitution().then(res => setMe(res.data))
    }, [])

    const onSubmit = async (data,e) => {
        const res = await createPolice({data})
        if (res.status === 200) {
            swal("Datos registrados", "La notificación fue enviada", "success", {
                button: "De acuerdo",
            });
        } else {
            swal("Algo salio mal", "La notificación no fue enviada", "warning", {
                button: "De acuerdo",
            });
        }
        e.target.reset()
    }

    return (
        <>
            <Head>
                <title>Registra oficiales</title>
                <meta name="description" content="This application is only for monitoring personnel." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <h1 className="title">
                Registro de oficiales
            </h1>
            <br />

            <Container >
                <h2>Introduzca los datos del oficial</h2><br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="" xs={1} sm={3}>
                                <Form.Control
                                    type="hidden"
                                    placeholder=""
                                    defaultValue={me.institucion_id}
                                    {...register("institucion_id", { required: true })}
                                />
                        <Form.Group className="mb-3 " controlId="formBasicEmail" as={Col}>
                            <Form.Label>Nombre</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe su nombre">
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
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe su apellido_paterno">
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
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe su apellido_materno">
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
                        <Form.Group className="mb-3 " controlId="formBasicEmail" as={Col}>
                            <Form.Label>Telefono</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe su telefono">
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
                        <Form.Group className="mb-3 " controlId="formBasicEmail" as={Col}>
                            <Form.Label>D.N.I.</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe su dni">
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
                        <Form.Group className="mb-3 " controlId="formBasicEmail" as={Col}>
                            <Form.Label>Provincia</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe su provincia">
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
                        <Form.Group className="mb-3 " controlId="formBasicEmail" as={Col}>
                            <Form.Label>Distrito</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe su distrito">
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
                        <Form.Group className="mb-3 " controlId="formBasicEmail" as={Col}>
                            <Form.Label>Referencia</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escribe su referencia">
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    {...register("referencia", { required: true })}
                                />
                            </FloatingLabel>
                            <Form.Text className="text-muted">
                                {!errors.referencia && <>Escriba su referencia</>}
                                {errors.referencia?.type === 'required' && <span className="text-danger">El campo referencia es obligatorio</span>}
                                {errors.referencia?.type === 'maxLength' && <span className="text-danger">El campo referencia es obligatorio debe contener mas de 10 caracteres.</span>}
                            </Form.Text>
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>
                </form>
            </Container>
        </>
    );
}

export default Police;