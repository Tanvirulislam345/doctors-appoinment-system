import { Container, Divider, Paper, Box } from '@material-ui/core';

import React from 'react';
import { useForm } from 'react-hook-form';
import { HeaderCaption, HeaderWrapper } from '../../../../styled/All.Styled';
import BothReviewsList from './BothReviewsList';

const ReviewsApproved = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Paper style={{ borderRadius: '20px' }}>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                        Approved Reviews
                    </HeaderCaption>
                    <i class="fas fa-search fa-lg" style={{ color: '#EDF1F5', padding: '0px 10px' }}></i>
                </HeaderWrapper>
                <Divider style={{ marginBottom: '18px' }} />
                <BothReviewsList></BothReviewsList>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className='rowContainer'>
                        <Box className='rowItem'>
                            <label>Doctor</label> <br />
                            <input type="text" {...register("doctor")} />
                        </Box>
                        <Box className='rowItem'>
                            <label>Patient</label> <br />
                            <input type="text" {...register("patient")} />
                        </Box>
                        <Box className='rowItem'>
                            <label>IP</label> <br />
                            <input type="number" {...register("ipaddress")} />
                        </Box>
                    </Box>
                    <Box className='rowContainer'>
                        <Box className='rowItem'>
                            <label>Review Date</label> <br />
                            <input type="date" {...register("date")} />
                        </Box>
                        <Box className='rowItem'>
                            <label>Review Time</label> <br />
                            <input type="time" {...register("time")} />
                        </Box>
                    </Box>
                    <Box className='rowContainer'>
                        <Box className='rowItem'>
                            <label>Review Date</label> <br />

                        </Box>
                        <Box className='rowItem'>
                            <label>Review Time</label> <br />

                        </Box>
                    </Box>
                    <Box className='rowContainer' style={{ display: 'flex' }}>
                        <Box className='rowItem itemSmall'>
                            <label>Overall reviews</label> <br />
                            <input type="number" defaultValue="test" {...register("reviews")} />
                        </Box>
                    </Box>
                    <Box className='rowContainer' style={{ display: 'flex' }}>
                        <Box className='rowItem'>
                            <label>Comment</label> <br />
                            <textarea rows='7' defaultValue='The doctor was on time and very understanding. I would highly recommend her.' {...register("comments")} />
                        </Box>
                    </Box>

                    <input type="submit" value="RESCHEDULE" className='frombutton' />
                    <input type="reset" value="Reject" className='frombutton' />


                </form>


            </Container>
        </Paper>
    );
};

export default ReviewsApproved;