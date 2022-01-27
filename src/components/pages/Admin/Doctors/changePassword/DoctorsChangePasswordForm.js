import { Box,Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const DoctorsChangePasswordForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
       <>
        <Typography variant="body1" gutterBottom style={{ opacity: '0.7', marginBottom: '0px' }}>
                Change password
            </Typography>
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
       </>
    );
};

export default DoctorsChangePasswordForm;