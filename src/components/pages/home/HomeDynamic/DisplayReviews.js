import { Grid, Rating, Typography, Box } from '@mui/material';
import React from 'react';
import specialist from '../../../../images/icons/specialist.png';

const DisplayReviews = () => {
    return (
        <div>
            <Typography style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '59px', marginBottom: '25px' }}>
                reviews
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4} >
                    <Typography style={{ fontSize: '22px', fontWeight: '500' }}>
                        Overall rating
                    </Typography>
                    <Typography style={{ fontSize: '70px', fontWeight: '500' }}>
                        4.94
                    </Typography>
                    <Rating name="read-only" size="medium" value={5} readOnly />
                    <Typography style={{ fontSize: '16px', fontWeight: '500' }}>
                        32 Reviews
                    </Typography>

                </Grid>
                <Grid item xs={4} >
                    <Box>
                        <Typography style={{ fontSize: '17px', fontWeight: '500' }}>
                            First impression
                        </Typography>
                        <Rating name="read-only" size="small" value={5} readOnly /><span>4.94</span>
                    </Box>
                    <Box style={{ margin: '18px 0px' }}>
                        <Typography style={{ fontSize: '17px', fontWeight: '500' }}>
                            Wait time
                        </Typography>
                        <Rating name="read-only" size="small" value={5} readOnly /><span>4.84</span>
                    </Box>
                    <Box>
                        <Typography style={{ fontSize: '17px', fontWeight: '500' }}>
                            Experienced & qualified
                        </Typography>
                        <Rating name="read-only" size="small" value={5} readOnly /><span>4.92</span>
                    </Box>
                </Grid>
                <Grid item xs={4} >
                    <Box>
                        <Typography style={{ fontSize: '17px', fontWeight: '500' }}>
                            Approachable & friendly
                        </Typography>
                        <Rating name="read-only" size="small" value={5} readOnly /><span>4.97</span>
                    </Box>
                    <Box style={{ margin: '18px 0px' }}>
                        <Typography style={{ fontSize: '17px', fontWeight: '500' }}>
                            Consistent
                        </Typography>
                        <Rating name="read-only" size="small" value={5} readOnly /><span>4.94</span>
                    </Box>
                    <Box>
                        <Typography style={{ fontSize: '17px', fontWeight: '500' }}>
                            He/she was trustworthy
                        </Typography>
                        <Rating name="read-only" size="small" value={5} readOnly /><span>4.95</span>
                    </Box>
                </Grid>
            </Grid>
            <Typography style={{ backgroundColor: '#F0F0F0', padding: '10px', display: 'flex', alignItems: 'center', margin: '30px 0px' }}>
                <img src={specialist} alt="" style={{ width: '29px', height: '34px' }} />
                <span style={{ fontSize: '14px', marginLeft: '20px' }}>
                    Your trust is our top concern, so providers can't pay to alter or remove reviews. We also don't publish reviews that contain any private patient health information. Learn more here
                </span>
            </Typography>
            <Rating name="read-only" size="medium" value={5} readOnly />
            <Typography style={{ fontSize: '18px' }}>
                Good experienced doctor, very well qualified.
            </Typography>

            <Typography style={{ fontSize: '16px' }}>
                October 19, 2021 - Robert B. - Verified patient
            </Typography>
            <Rating name="read-only" size="medium" value={5} readOnly style={{ marginTop: '20px' }} />
            <Typography style={{ fontSize: '18px' }}>
                The doctor was very professional. His stag was friendly and supportive as well. I am feeling better ready. I am very pleased and confident in my decision to book an appointment with this dermatologist. I am extremely pleased with my decision.
            </Typography>
            <Typography style={{ fontSize: '16px', marginTop: '10px' }}>
                July 20, 2021 - Shiela B. - Verified patient
            </Typography>
        </div>
    );
};

export default DisplayReviews;