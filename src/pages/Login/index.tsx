import React from 'react';
import {  ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';


 function Login(){
    const history = useHistory();
    
    function signIn(values: object){
       
            api.post('/auth', values).then(resp =>{
                const { data: {token } }= resp;
    
                if(token){
                    localStorage.setItem('token', token)
                    history.push('/');

                    console.log('Vai na fé');
                
                }
                
            });
      
         
    }
    
    const validations =
        yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(3).required()
        });

    return(
        <>
        <h1>Login</h1>
        <p>Preencha os campos para continuar</p>

        <Formik 
            initialValues={{}} 
            onSubmit={signIn}
            validationSchema={validations}
        >
            <Form className="login">
            <label>Email</label>
                <div className="login-group">
                    <Field  
                        name="email" 
                        className="login-field" 
                    />
                    <ErrorMessage 
                        component="span" 
                        name="email" 
                        className="login-error" 
                    />
                </div>

                <div className="login-group">
                <label>Password</label>
                    <Field  
                        name="password" 
                        className="login-field"
                        type="password"
                    />
                    <ErrorMessage 
                        component="span" 
                        name="password" 
                        className="login-error" 
                    />
                </div>
                <button
                    type="submit"
                    className="login-button"
                >
                    Login
                </button>
            </Form>
        </Formik>

        </>
    );
}


export default Login;