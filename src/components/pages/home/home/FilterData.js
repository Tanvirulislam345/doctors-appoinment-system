import { Grid, Typography, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FilterData = () => {
    // const [todaysDate, setTodaysDate] = useState(new Date().toLocaleDateString());
    // console.log(todaysDate);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography style={{ fontSize: '26px', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
                        23 Chiropractors near you
                    </Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="date"
                            // defaultValue={todaysDate}
                            {...register("exampleRequired")}
                            style={{ border: 'none', fontSize: '20px', fontWeight: 'bold', }} />

                    </form>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default FilterData;