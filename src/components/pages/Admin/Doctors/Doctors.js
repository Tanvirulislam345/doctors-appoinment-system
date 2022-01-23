import { Container, Divider, Paper } from '@material-ui/core';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../styled/All.Styled';
import DoctorsList from './DoctorsList';


const Doctors = () => {
    return (
        <Paper>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                        Doctors
                    </HeaderCaption>
                    <i class="fas fa-search fa-lg" style={{ color: '#EDF1F5', padding: '0px 10px' }}></i>
                </HeaderWrapper>
                <Divider style={{ margin: '10px 0px' }} />
                <DoctorsList></DoctorsList>
            </Container>
        </Paper>
    );
};

export default Doctors;