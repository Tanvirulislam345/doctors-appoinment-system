import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AllDoctorsDetails from './AllDoctorsDetails';
import FilterData from './FilterData';
import MyMap from './MyMap';


const Home = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <FilterData></FilterData>
                    <AllDoctorsDetails></AllDoctorsDetails>
                </Grid>
                <Grid item xs={4}>
                    <MyMap></MyMap>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;