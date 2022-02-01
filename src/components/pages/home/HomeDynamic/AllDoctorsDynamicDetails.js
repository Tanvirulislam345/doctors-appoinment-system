import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import image1 from '../../../../images/pic/image1.png';
import peers from '../../../../images/icons/peers.png';
import locationIcon from '../../../../images/icons/locationIcon.png';
import phone from '../../../../images/icons/phone.png';
import visite from '../../../../images/icons/visite.png';
import facebook from '../../../../images/icons/facebook.png';
import linkedin from '../../../../images/icons/linkedin.png';
import social from '../../../../images/icons/social.png';
import specialist from '../../../../images/icons/specialist.png';
import exprience from '../../../../images/icons/exprience.png';
import DoctorsAbout from './DoctorsAbout';


const AllDoctorsDynamicDetails = () => {
    return (
        <Box
            style={{ margin: '40px' }}>
            <Grid container spacing={2}>
                <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <img src={image1} alt="" style={{ height: '156px', width: '156px', borderRadius: '100%' }} />
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingRight: '16px', marginTop: '10px' }}>
                        <Typography style={{ fontSize: '16px', fontWeight: '500' }}>
                            5 photos
                        </Typography>
                        <Typography style={{ fontSize: '10px', width: '84px', margin: '11px 0px' }}>
                            Licence Number:
                            2776/23-10-2013
                        </Typography>
                        <Box>
                            <img src={facebook} alt="" style={{ height: '20px', width: '20px', borderRadius: '100%' }} />
                            <img src={linkedin} alt="" style={{ height: '20px', width: '20px', borderRadius: '100%', marginLeft: '11px', marginRight: '11px' }} />
                            <img src={social} alt="" style={{ height: '20px', width: '20px', borderRadius: '100%' }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Dr. Justin Lewis, DC
                    </Typography>
                    <Typography style={{ fontSize: '16px', fontWeight: '600' }}>
                        Chiropractor
                    </Typography>

                    <Typography style={{ fontSize: '15px', fontWeight: '500', display: 'flex', alignItems: 'flex-start', marginTop: '20px' }}>
                        <img src={locationIcon} alt="" style={{ height: '16px', width: '11px', marginRight: '13px', marginTop: '4px' }} />
                        <span style={{ maxWidth: '300px' }}>0.2 mi • 519 8th Ave, Suite 811 (Between
                            35th and 36th St.), New York, NY 10018</span>
                    </Typography>
                    <Typography style={{ fontSize: '15px', fontWeight: '500', display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                        <img src={locationIcon} alt="" style={{ height: '16px', width: '11px', marginRight: '13px', marginTop: '4px' }} />
                        <span style={{ maxWidth: '300px' }}>0.6 mi • 400 South Oyster Bay Road, Suite 200,
                            Hicksville, NY 11801</span>
                    </Typography>

                    <Typography style={{ fontSize: '15px', fontWeight: '500', display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                        <img src={phone} alt="" style={{ height: '16px', width: '11px', marginRight: '13px', marginTop: '4px' }} />
                        <span style={{ maxWidth: '300px' }}>SEE PHONE</span>
                    </Typography>

                    <Typography style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                        <img src={visite} alt="" style={{ height: '16px', width: '11px', marginRight: '13px', marginTop: '4px' }} />
                        <span>
                            <span style={{ fontSize: '15px', fontWeight: '500' }}>Visit fee:  150€ / Follow up fee:  100€</span><br />
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>The fee includes physical examination and follow up exams </span>
                        </span>
                    </Typography>
                </Grid>
            </Grid>
            <Divider style={{ marginTop: '24px' }} />
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0px' }}>
                    <Typography style={{ fontSize: '19px', fontWeight: '500' }}>
                        about
                    </Typography>
                    <Typography style={{ fontSize: '19px', fontWeight: '500' }}>
                        Prices
                    </Typography>
                    <Typography style={{ fontSize: '19px', fontWeight: '500' }}>
                        Location
                    </Typography>
                    <Typography style={{ fontSize: '19px', fontWeight: '500' }}>
                        Reviews
                    </Typography>
                    <Typography style={{ fontSize: '19px', fontWeight: '500' }}>
                        CV
                    </Typography>
                    <Typography style={{ fontSize: '19px', fontWeight: '500' }}>
                        Peer recommendations
                    </Typography>
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2}>
                <Grid item xs={6} style={{ marginTop: '20px' }}>
                    <Typography style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <img src={peers} alt="" style={{ height: '26px', width: '26px', marginRight: '13px', marginTop: '4px' }} />
                        <span>
                            <span style={{ fontSize: '16px', fontWeight: '500' }}>18 peers recommendations</span><br />
                            <span style={{ fontSize: '14px' }}>Doctors who know the applicant well and can evaluate the applicant’s strengths </span>
                        </span>
                    </Typography>
                </Grid>
                <Grid item xs={6} style={{ marginTop: '20px' }}>
                    <Typography style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <img src={specialist} alt="" style={{ height: '26px', width: '26px', marginRight: '13px', marginTop: '4px' }} />
                        <span>
                            <span style={{ fontSize: '16px', fontWeight: '500' }}>11 years as a specialist</span><br />
                            <span style={{ fontSize: '14px' }}>How many years of experience the doctor has as a specialist </span>
                        </span>
                    </Typography>
                </Grid>
                <Grid item xs={6} style={{ marginTop: '20px' }}>
                    <Typography style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <img src={exprience} alt="" style={{ height: '26px', width: '18px', marginRight: '13px', marginTop: '4px' }} />
                        <span>
                            <span style={{ fontSize: '16px', fontWeight: '500' }}>17 years of experience</span><br />
                            <span style={{ fontSize: '14px' }}>How many years of experience the doctor has </span>
                        </span>
                    </Typography>
                </Grid>
            </Grid>
            <Divider style={{ marginTop: '20px' }} />
            <DoctorsAbout></DoctorsAbout>
        </Box>
    );
};

export default AllDoctorsDynamicDetails;