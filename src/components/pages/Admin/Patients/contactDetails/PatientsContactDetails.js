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
                        Preferences
                    </HeaderCaption>
                </HeaderWrapper>
                <Divider style={{ marginBottom: '18px' }} />
                <PatientsContactForm></PatientsContactForm>
            </Container>
        </Paper>
    );
};

export default PatientsContactDetails;