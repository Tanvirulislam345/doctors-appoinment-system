
import { Grid, Paper } from '@mui/material';
import React from 'react';
import AllDoctorsDynamicDetails from './AllDoctorsDynamicDetails';
import FreeAppoinments from './FreeAppoinments';

const DynamicPage = () => {
    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <AllDoctorsDynamicDetails></AllDoctorsDynamicDetails>
                </Grid>
                <Grid item xs={4}>
                    <FreeAppoinments></FreeAppoinments>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default DynamicPage;