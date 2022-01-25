import { Container, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../../styled/All.Styled';
import DoctorsChangePasswordForm from './DoctorsChangePasswordForm';

const DoctorsChangePassword = () => {
    return (
        <Paper style={{ borderRadius: '20px' }}>
        <Container>
            <HeaderWrapper>
                <HeaderCaption>
                    Password
                </HeaderCaption>
            </HeaderWrapper>
            <Divider style={{ marginBottom: '18px' }} />
            <Typography variant="body1" gutterBottom style={{ opacity: '0.7' }}>
                Change password
            </Typography>
            <DoctorsChangePasswordForm></DoctorsChangePasswordForm>
        </Container>
    </Paper>
    );
};

export default DoctorsChangePassword;