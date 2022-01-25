import { Paper } from '@material-ui/core';
import { Container, Divider } from '@mui/material';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../../styled/All.Styled';
import DoctorsContactForm from './DoctorsContactForm';

const DoctorsContactDetails = () => {
    return (
        <Paper style={{ borderRadius: '20px' }}>
        <Container>
            <HeaderWrapper>
                <HeaderCaption>
                    Contact Details
                </HeaderCaption>
            </HeaderWrapper>
            <Divider style={{ marginBottom: '18px' }} />
           <DoctorsContactForm></DoctorsContactForm>
        </Container>
    </Paper>
    );
};

export default DoctorsContactDetails;