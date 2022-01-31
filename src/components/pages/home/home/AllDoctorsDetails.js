import { Grid, Box, Typography, Rating, Paper } from '@mui/material';
import React, { useState } from 'react';
import image1 from '../../../../images/pic/image1.png';
import locationIcon from '../../../../images/icons/locationIcon.png';
import phone from '../../../../images/icons/phone.png';
import peers from '../../../../images/icons/peers.png';
import exprience from '../../../../images/icons/exprience.png';
import TimeBlock from './TimeBlock';

const AllDoctorsDetails = () => {
    const [items, setItems] = useState([1, 2, 3, 4]);
    return (
        <>
            {
                items.map((item, index) => <Paper
                    key={index}
                    style={{ padding: '32px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <img src={image1} alt="" style={{ height: '110px', width: '110px', borderRadius: '100%' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                Dr. Justin Lewis, DC
                            </Typography>
                            <Typography style={{ fontSize: '16px', fontWeight: '600' }}>
                                Chiropractor
                            </Typography>
                            <Typography style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: '12px' }}>
                                <span>4.92</span><Rating name="read-only" size="small" value={5} readOnly sx={{ px: 1 }} /><span>(45 Reviews)</span>
                            </Typography>
                            <Typography style={{ fontSize: '15px', fontWeight: '500', display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                                <img src={locationIcon} alt="" style={{ height: '16px', width: '11px', marginRight: '13px', marginTop: '4px' }} />
                                <span style={{ maxWidth: '300px' }}>0.2 mi • 519 8th Ave, Suite 811 (Between
                                    35th and 36th St.), New York, NY 10018</span>
                            </Typography>
                            <Typography style={{ fontSize: '15px', fontWeight: '500', display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                                <img src={phone} alt="" style={{ height: '16px', width: '11px', marginRight: '13px', marginTop: '4px' }} />
                                <span style={{ maxWidth: '300px' }}>SEE PHONE</span>
                            </Typography>
                            <Typography style={{ fontSize: '15px', fontWeight: '500', display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                                <img src={peers} alt="" style={{ height: '16px', width: '11px', marginRight: '13px', marginTop: '4px' }} />
                                <span style={{ maxWidth: '300px' }}>18 peers recommendations</span>
                            </Typography>
                            <Typography style={{ fontSize: '15px', fontWeight: '500', display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                                <img src={exprience} alt="" style={{ height: '16px', width: '11px', marginRight: '13px', marginTop: '4px' }} />
                                <span style={{ maxWidth: '300px' }}>
                                    <span style={{ display: 'block', marginBottom: '8px' }}>
                                        17 years of experience
                                    </span>
                                    <span>
                                        Heart Muscle Disease/Cardiomyopathy, Interventional Cardiology
                                    </span>
                                </span>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <TimeBlock></TimeBlock>
                        </Grid>
                    </Grid>
                </Paper>)
            }

        </>
    );
};

export default AllDoctorsDetails;