import { Container, Divider, Paper, Box, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { HeaderCaption, HeaderWrapper } from '../../../../styled/All.Styled';

const MainSetting = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Paper style={{ borderRadius: '20px' }}>
        <Container>
            <HeaderWrapper>
                <HeaderCaption>
                    Setting
                </HeaderCaption>
            </HeaderWrapper>
            <Divider style={{ marginBottom: '18px' }} />
            <Typography style={{fontSize: '18px'}}>
            Calendar Sync
            </Typography>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box className='rowContainer'>
                <Box className='rowItem urlItem'>
                    <label>Video Visit</label> <br />
                    <label style={{marginRight: '20px'}}>Calendar URL</label>
                    <input type="password" {...register("newpassword")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem urlItem'>
                <label>Clinic Location 1 (Address)</label> <br />
                <label style={{marginRight: '20px'}}>Calendar URL</label>
                    <input type="password" {...register("confirmPassword")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem urlItem'>
                <label>Clinic Location 2 (Address)</label> <br />
                <label style={{marginRight: '20px'}}>Calendar URL</label>
                    <input type="password" {...register("confirmPassword")} />
                </Box>
            </Box>
            <input type="submit" value="save" className='frombutton' />
        </form>
        </Container>
    </Paper>
    );
};

export default MainSetting;