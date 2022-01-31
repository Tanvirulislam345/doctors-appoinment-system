import { Container, Paper } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Paper className="signUpCover">
            <Container className="signUpContainer">
                <div className='signupHeading'>
                    <h1>Sign In</h1>
                </div>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>

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

                    <input type="submit" value="LogIn" className="inputField btn-regular" />

                </form>
                <p className="txt mt-2">
                    <small className="smallText">are you new user?</small>
                    <Link to='/signup' className="regTolog">Login</Link>
                </p>
            </Container>
        </Paper>
    );
};

export default SignIn;