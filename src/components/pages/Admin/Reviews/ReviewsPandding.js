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
                <Divider style={{ marginBottom: '18px' }} />
                <BothReviewsList></BothReviewsList>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className='rowContainer'>
                        <Box className='rowItem itemRating'>
                            <label>Doctor</label> <br />
                            <input type="text" {...register("doctor")} />
                        </Box>
                        <Box className='rowItem itemRating'>
                            <label>Patient</label> <br />
                            <input type="text" {...register("patient")} />
                        </Box>
                        <Box className='rowItem itemRating'>
                            <label>IP</label> <br />
                            <input type="number" {...register("ipaddress")} />
                        </Box>
                    </Box>
                    <Box className='rowContainer'>
                        <Box className='rowItem itemRating'>
                            <label>Review Date</label> <br />
                            <input type="date" {...register("date")} />
                        </Box>
                        <Box className='rowItem itemRating'>
                            <label>Review Time</label> <br />
                            <input type="time" {...register("time")} />
                        </Box>
                    </Box>
                    <Box className='rowContainer'>
                        <Box className='rowItem itemRating'>
                            <label>First impression</label>
                            <Box className='rating'>
                                <Rating name="size-medium" defaultValue={5} />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>

                        </Box>
                        <Box className='rowItem itemRating'>
                            <label>Approachable & friendly</label>
                            <Box className='rating'>
                                <Rating name="size-medium" defaultValue={5} />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='rowContainer'>
                        <Box className='rowItem itemRating'>
                            <label>Wait time</label>
                            <Box className='rating'>
                                <Rating name="size-medium" defaultValue={5} />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>

                        </Box>
                        <Box className='rowItem itemRating'>
                            <label>Consistent</label>
                            <Box className='rating'>
                                <Rating name="size-medium" defaultValue={5} />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='rowContainer'>
                        <Box className='rowItem itemRating'>
                            <label>Experienced & qualified</label>
                            <Box className='rating'>
                                <Rating name="size-medium" defaultValue={5} />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>

                        </Box>
                        <Box className='rowItem itemRating'>
                            <label>He/she was trustworthy</label>
                            <Box className='rating'>
                                <Rating name="size-medium" defaultValue={5} />
                                <span style={{ marginLeft: '10px' }}>4.95</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='rowContainer' style={{ display: 'flex' }}>
                        <Box className='rowItem itemRating itemSmall'>
                            <label>Overall reviews</label> <br />
                            <input type="number" defaultValue="test" {...register("reviews")} />
                        </Box>
                    </Box>
                    <Box className='rowContainer' style={{ display: 'flex' }}>
                        <Box className='rowItem itemRating'>
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