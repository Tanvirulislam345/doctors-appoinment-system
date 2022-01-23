import { Box } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const PatientsAppoinmentForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>Doctor</label> <br />
                    <input defaultValue="test" {...register("firstName")} />
                </Box>

            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>Reason for visite</label> <br />
                    <input defaultValue="test" {...register("reason1")} /> <br />
                    <input defaultValue="test" {...register("reason2")} />
                </Box>
                <Box className='rowItem itemSmall'>
                    <label>price</label> <br />
                    <input defaultValue="50" {...register("price1")} /> <br />
                    <input defaultValue="120" {...register("price2")} />
                </Box>
            </Box>
            <Box className='rowContainer' style={{ display: 'flex' }}>
                <Box className='rowItem'>
                    <label>Date</label> <br />
                    <input type="date"  {...register("date")} />
                </Box>
                <Box className='rowItem itemSmall'>
                    <label>time</label> <br />
                    <input type="time"  {...register("time")} />
                </Box>
            </Box>
            <Box className='rowContainer' style={{ display: 'flex' }}>
                <Box className='rowItem'>
                    <label>Clinic</label> <br />
                    <input type="text"  {...register("clinic")} />
                </Box>
                <Box className='rowItem'>
                    <label>Insurance</label> <br />
                    <input type="text"   {...register("Insurance")} />
                </Box>
            </Box>


            <input type="submit" value="Approved" className='frombutton' />
            <input type="reset" value="RESCHEDULE" className='frombutton' />
            <input type="reset" value="Cancel" className='frombutton' />

        </form>
    );
};

export default PatientsAppoinmentForm;