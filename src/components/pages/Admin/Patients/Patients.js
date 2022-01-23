import { Container, Divider, Paper } from '@material-ui/core';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../styled/All.Styled';
import PatientsList from './PatientsList';


const Patients = () => {
    return (
        <Paper>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                        Patients
                    </HeaderCaption>
                    <i class="fas fa-search fa-lg" style={{ color: '#EDF1F5', padding: '0px 10px' }}></i>
                </HeaderWrapper>
                <Divider style={{ margin: '10px 0px' }} />
                <PatientsList></PatientsList>
            </Container>
        </Paper>
    );
};

export default Patients;