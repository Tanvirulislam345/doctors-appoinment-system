import { Container, Divider, Paper } from '@material-ui/core';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../styled/All.Styled';
import PatientsList from './PatientsList';


const Patients = () => {
    return (
        <Paper style={{ borderRadius: '10px' }}>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                        Patients
                    </HeaderCaption>
                    <i class="fas fa-search fa-lg" style={{ color: '#EDF1F5', padding: '0px 10px' }}></i>
                </HeaderWrapper>
                <Divider style={{ marginTop: '10px', marginBottom: '20px' }} />
                <PatientsList></PatientsList>
            </Container>
        </Paper>
    );
};

export default Patients;