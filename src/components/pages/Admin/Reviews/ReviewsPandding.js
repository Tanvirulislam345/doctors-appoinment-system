import { Container, Divider, Paper, Box } from '@material-ui/core';
import Rating from '@mui/material/Rating';
import React from 'react';
import { useForm } from 'react-hook-form';
import { HeaderCaption, HeaderWrapper } from '../../../../styled/All.Styled';
import BothReviewsList from './BothReviewsList';

const ReviewsPandding = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Paper style={{ borderRadius: '20px' }}>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                        Pending Reviews
                    </HeaderCaption>
                    <i class="fas fa-search fa-lg" style={{ color: '#EDF1F5', padding: '0px 10px' }}></i>
                </HeaderWrapper>
                <Divider style={{ marginTop: '10px', marginBottom: '20px' }} />
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
                        <Box className='rowItem  ratingItem'>
                            <label>First impression</label>
                            <Box className='rating'>
                                <Rating name="read-only" size="small" value={5} readOnly />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>

                        </Box>
                        <Box className='rowItem  ratingItem'>
                            <label>Approachable & friendly</label>
                            <Box className='rating'>
                                <Rating name="read-only" size="small" value={5} readOnly />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='rowContainer'>
                        <Box className='rowItem  ratingItem'>
                            <label>Wait time</label>
                            <Box className='rating'>
                                <Rating name="read-only" size="small" value={5} readOnly />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>

                        </Box>
                        <Box className='rowItem  ratingItem'>
                            <label>Consistent</label>
                            <Box className='rating'>
                                <Rating name="read-only" size="small" value={5} readOnly />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='rowContainer'>
                        <Box className='rowItem  ratingItem'>
                            <label>Experienced & qualified</label>
                            <Box className='rating'>
                                <Rating name="read-only" size="small" value={5} readOnly />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>
                        </Box>
                        <Box className='rowItem ratingItem' >
                            <label>He/she was trustworthy</label>
                            <Box className='rating'>
                                <Rating name="read-only" size="small" value={5} readOnly />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='rowContainer' style={{ display: 'flex' }}>
                        <Box className='rowItem itemSmall'>
                            <label>Overall reviews</label> <br />
                            <input type="number" defaultValue="test" {...register("reviews")} />
                        </Box>
                    </Box>
                    <Box className='rowContainer'>
                        <Box className='rowItem'>
                            <label>Comment</label> <br />
                            <textarea rows='7' defaultValue='The doctor was on time and very understanding. I would highly recommend her.' {...register("comments")} />
                        </Box>
                    </Box>

                    <input type="submit" value="APPROVE" className='frombutton' />
                    <input type="reset" value="Reject" className='frombutton' />


                </form>


            </Container>
        </Paper>
    );
};

export default ReviewsPandding;