import { Paper, Container, Box, Divider, Typography  } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { HeaderCaption, HeaderWrapper } from '../../../../../styled/All.Styled';
const UsersRegistration = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Paper style={{ borderRadius: '20px' }}>
        <Container>
            <HeaderWrapper>
                <HeaderCaption>
                    Approved Appointments
                </HeaderCaption>
                <i class="fas fa-search fa-lg" style={{ color: '#EDF1F5', padding: '0px 10px' }}></i>
            </HeaderWrapper>
            <Divider style={{ marginTop:'10px', marginBottom: '20px' }} />
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>First Name</label> <br />
                    <input type="text" {...register("firstName")} />
                </Box>
                <Box className='rowItem'>
                    <label>First Name</label> <br />
                    <input type="text" {...register("lastName")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemBig'>
                    <label>Email</label> <br />
                    <input type="email" {...register("email")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>User Name</label> <br />
                    <input type="text" {...register("userName")} />
                </Box>
                <Box className='rowItem itemSmall'>
                    <label>User Role</label> <br />
                    <select {...register("role")}>
                        <option value="female">Doctor</option>
                        <option value="male">Patients</option>
                        <option value="other">other</option>
                    </select>
                </Box>
            </Box>
            <Typography variant="body1" gutterBottom style={{ opacity: '0.7', marginTop: '30px' }}>
                Change password
            </Typography>
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

            <Box className='rowContainer'>
                <Box className='rowItem itemSmall'>
                    <label>Status</label> <br />
                    <select {...register("Status")}>
                        <option value="active">Active</option>
                        <option value="inactive">InActive</option>
                        <option value="other">other</option>
                    </select>
                </Box>
            </Box>

            <input type="submit" value="save changes" className='frombutton' style={{ width: '220px' }} />


        </form>
            </Container>
            </Paper>
    );
};

export default UsersRegistration;