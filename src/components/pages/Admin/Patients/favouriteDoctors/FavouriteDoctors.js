import { Container, Divider, Paper } from '@material-ui/core';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../../styled/All.Styled';

const FavouriteDoctors = () => {
    return (
        <Paper style={{ borderRadius: '20px', minHeight: '640px' }}>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                        Favourite Doctors
                    </HeaderCaption>
                </HeaderWrapper>
                <Divider style={{ marginTop:'10px', marginBottom: '20px' }} />
                <h4>No Favourite  Doctors</h4>
            </Container>
        </Paper>
    );
};

export default FavouriteDoctors;