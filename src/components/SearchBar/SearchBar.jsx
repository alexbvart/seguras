import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

/* CSS */
import { Col, Container, Form, Row, FloatingLabel } from 'react-bootstrap';

const SearchBar = ({handleOnSubmit}) => {

    const { handleSubmit, register, formState: { errors } } = useForm();

    /* Funciunes para manejar el input y realizar la busqueda  {kewyword} */
    const onSubmit = (data) => {
        console.log("hijo",data)
        handleOnSubmit(data.keyword)
    }

    return (
        <>
            <Container >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="" xs={1} >
                        <Form.Group className="mb-3 " controlId="formBasicEmail" as={Col}>
                            <Form.Label>Busca por DNI o nombre</Form.Label>
                            <FloatingLabel controlId="floatingInputGrid" label="Escriba DNI o nombre">
                                <Form.Control
                                    autoFocus
                                    type="search"
                                    {...register("keyword", { required: true })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                </form>
            </Container>
        </>
    );
}
export default SearchBar;