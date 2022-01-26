import { Container, Divider, Paper } from '@material-ui/core';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../../styled/All.Styled';
import PatientsContactForm from './PatientsContactForm';

const PatientsContactDetails = () => {
    return (
        <Paper style={{ borderRadius: '20px' }}>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                    Contact Details
                    </HeaderCaption>
                </HeaderWrapper>
                <Divider style={{ marginTop:'10px', marginBottom: '20px' }} />
                <PatientsContactForm></PatientsContactForm>
            </Container>
        </Paper>
    );
};

export default PatientsContactDetails;