import { Container, Divider, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../../styled/All.Styled';
import PasswordForm from './PasswordForm';

const ChangePassword = () => {
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
                <PasswordForm></PasswordForm>
            </Container>
        </Paper>
    );
};

export default ChangePassword;