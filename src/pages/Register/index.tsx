import React from 'react';
import {  ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import './styles.css';


function Register(){
    function handleSubmit(){
        console.log('ok')
    };

    const validations =
        yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(8).required(),
        });

    return(
        <>
        <h1>Register</h1>
        <p>Preencha os campos para continuar</p>

        <Formik 
            initialValues={{}} 
            onSubmit={handleSubmit}
            validationSchema={validations}
        >
            <Form className="form">
            <label>Email</label>
                <div className="form-group">
                    <Field  
                        name="email" 
                        className="form-field" 
                    />
                    <ErrorMessage 
                        component="span" 
                        name="email" 
                        className="form-error" 
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <Field  
                        name="password" 
                        className="form-field"
                        type="password"
                    />
                    <ErrorMessage 
                        component="span" 
                        name="password" 
                        className="form-error" 
                    />
                </div>
                <button
                    type="submit"
                    className="form-button"
                >
                    Cadastrar
                </button>
            </Form>
        </Formik>

        </>
    );
}


export default Register;