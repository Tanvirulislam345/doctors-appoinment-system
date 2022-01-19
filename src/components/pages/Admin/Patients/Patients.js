import { Container, Divider, Paper, Typography } from '@material-ui/core';
import React from 'react';
import styled from "styled-components";
import PatientsList from './PatientsList';

const HeaderCaption = styled.div`
font-size: 24px;
font-weight: 700;
color: #333333;
  `;
  const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 34px;
  `;

const Patients = () => {
    return (
        <Paper>
           <Container>
           <HeaderWrapper>
           <HeaderCaption>
                Patients
            </HeaderCaption>
            <i class="fas fa-search fa-lg" style={{color: '#EDF1F5', padding: '0px 10px'}}></i>
           </HeaderWrapper>
            <Divider style={{margin: '10px 0px'}} />
            <PatientsList></PatientsList>  
           </Container>
        </Paper>
    );
};

export default Patients;