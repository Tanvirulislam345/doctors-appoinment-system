import { Container, Divider, Paper } from '@mui/material';
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
            <Divider style={{ marginTop: '10px', marginBottom: '20px' }} />
            <DoctorsChangePasswordForm></DoctorsChangePasswordForm>
        </Container>
    </Paper>
    );
};

export default DoctorsChangePassword;