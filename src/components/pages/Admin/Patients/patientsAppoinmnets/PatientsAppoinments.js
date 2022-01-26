import { Container, Divider, Paper } from '@material-ui/core';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../../styled/All.Styled';
import PatientsAppoinmentForm from './PatientsAppoinmentForm';
import PatientsAppoinmentsList from './PatientsAppoinmentsList';

const PatientsAppoinments = () => {
    return (
        <Paper style={{ borderRadius: '20px' }}>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                        Appoinments
                    </HeaderCaption>
                    <i class="fas fa-search fa-lg" style={{ color: '#EDF1F5', padding: '0px 10px' }}></i>
                </HeaderWrapper>
                <Divider style={{ marginTop:'10px', marginBottom: '20px' }} />
                <PatientsAppoinmentsList></PatientsAppoinmentsList>
                <PatientsAppoinmentForm></PatientsAppoinmentForm>
            </Container>
        </Paper>
    );
};

export default PatientsAppoinments;