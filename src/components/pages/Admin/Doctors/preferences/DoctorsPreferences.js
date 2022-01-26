import { Divider } from '@material-ui/core';
import { Container, Paper } from '@mui/material';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../../styled/All.Styled';
import DoctorsPreferencesForm from './DoctorsPreferencesForm';

const DoctorsPreferences = () => {
    return (
        <Paper style={{ borderRadius: '20px' }}>
        <Container>
            <HeaderWrapper>
                <HeaderCaption>
                    Preferences
                </HeaderCaption>
            </HeaderWrapper>
            <Divider style={{ marginTop: '10px', marginBottom: '20px' }} />
            <DoctorsPreferencesForm></DoctorsPreferencesForm>
        </Container>
    </Paper>
    );
};

export default DoctorsPreferences;