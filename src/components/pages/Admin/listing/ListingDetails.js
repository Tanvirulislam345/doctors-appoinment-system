import { Container, Divider, Paper } from '@mui/material';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../styled/All.Styled';
import ListingForm from './ListingForm';

const ListingDetails = () => {
    return (
        <Paper style={{borderRadius: '10px'}}>
            <Container>
                <HeaderWrapper>
                <HeaderCaption>Listing Details</HeaderCaption>
                </HeaderWrapper>
                <Divider style={{ marginTop: '20px' }} />
                <ListingForm></ListingForm>
        </Container>
        </Paper>
    );
};

export default ListingDetails;