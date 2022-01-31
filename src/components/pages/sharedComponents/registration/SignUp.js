import React from 'react';
import { Container, Paper } from '@mui/material';
import './SignUp.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Paper className="signUpCover">
            <Container className="signUpContainer">
                <div className='signupHeading'>
                    <h1>Sign Up</h1>
                    <h2>Create an account</h2>
                    <small className="smallText">signUp a new account in one mimute</small>
                </div>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="inputField"
                        type="text"
                        {...register("username")}
                        placeholder="user name"
                        required
                    /><br />
                    <input
                        className="inputField"
                        type="email"
                        {...register("email")}
                        placeholder="Email"
                        required
                    /><br />
                    <input
                        className="inputField"
                        type="password"
                        {...register("password")}
                        placeholder="password"
                        required
                    /><br />

                    <input type="submit" value="register" className="inputField btn-regular" />

                </form>
                <p className="txt mt-2">
                    <small className="smallText">are you already registered?</small>
                    <Link to='/signin' className="regTolog">Login</Link>
                </p>
            </Container>
        </Paper>
    );
};

export default SignUp;