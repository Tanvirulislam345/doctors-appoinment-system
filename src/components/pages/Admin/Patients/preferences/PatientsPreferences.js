import { Container, Divider, Paper } from '@material-ui/core';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../../styled/All.Styled';
import PatientsPreferenceForm from './PatientsPreferenceForm';

const PatientsPreferences = () => {
    return (
        <Paper style={{ borderRadius: '20px' }}>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                        Preferences
                    </HeaderCaption>
                </HeaderWrapper>
                <Divider style={{ marginTop:'10px', marginBottom: '20px' }} />
                <PatientsPreferenceForm></PatientsPreferenceForm>
            </Container>
        </Paper>
    );
};

export default PatientsPreferences;