import { Container, Divider, Paper } from '@material-ui/core';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../styled/All.Styled';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const PatientsReviews = () => {
    return (
        <Paper style={{ borderRadius: '20px' }}>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                        Reviews
                    </HeaderCaption>
                    <i class="fas fa-search fa-lg" style={{ color: '#EDF1F5', padding: '0px 10px' }}></i>
                </HeaderWrapper>
                <Divider style={{ marginTop: '10px', marginBottom: '20px' }} />
                <ReviewList></ReviewList>
                <ReviewForm></ReviewForm>
            </Container>
        </Paper>
    );
};

export default PatientsReviews;