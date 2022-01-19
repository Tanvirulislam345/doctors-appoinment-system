import { Container, Divider, Paper, Typography } from '@material-ui/core';
import React from 'react';
import styled from "styled-components";
import DoctorsList from './DoctorsList';

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

const Doctors = () => {
    return (
        <Paper>
           <Container>
           <HeaderWrapper>
           <HeaderCaption>
                Doctors
            </HeaderCaption>
            <i class="fas fa-search fa-lg"  style={{color: '#EDF1F5', padding: '0px 10px'}}></i>
           </HeaderWrapper>
            <Divider style={{margin: '10px 0px'}} />
            <DoctorsList></DoctorsList>   
           </Container>
        </Paper>
    );
};

export default Doctors;