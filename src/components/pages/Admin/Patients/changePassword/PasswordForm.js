import { Box } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const PasswordForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>New Password</label> <br />
                    <input type="password" {...register("newpassword")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>Confirm New Password</label> <br />
                    <input type="password" {...register("confirmPassword")} />
                </Box>
            </Box>



            <input type="submit" value="save changes" className='frombutton' style={{ width: '220px' }} />


        </form>
    );
};

export default PasswordForm;