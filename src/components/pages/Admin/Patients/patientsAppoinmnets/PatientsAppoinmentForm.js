import { Box } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const PatientsAppoinmentForm = () => {
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = data => {

        axios.post('http://localhost:7000/patients-appoinments', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('patients appoinments submitted successfully.');
                    reset();
                }
            })
        // console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>Doctor</label> <br />
                    <input defaultValue="Albert Pollock" {...register("doctorsName")} />
                </Box>

            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>Reason for visite</label> <br />
                    <input defaultValue="1. Acne Treatment" {...register("reason1")} /> <br />
                    <input defaultValue="2. Expression wrinkles" {...register("reason2")} />
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
                    <input type="date" {...register("date")} />
                </Box>
                <Box className='rowItem itemSmall'>
                    <label>time</label> <br />
                    <input type="time"  {...register("time")} />
                </Box>
            </Box>
            <Box className='rowContainer' style={{ display: 'flex' }}>
                <Box className='rowItem'>
                    <label>Clinic</label> <br />
                    <input type="text" defaultValue="Stratigou 34 st."  {...register("clinic")} />
                </Box>
                <Box className='rowItem'>
                    <label>Insurance</label> <br />
                    <input type="text" defaultValue="Public insurance"   {...register("insurance")} />
                </Box>
            </Box>


            <input type="submit" value="Approved" className='frombutton' />
            <input type="submit" value="RESCHEDULE" className='frombutton' />
            <input type="submit" value="Reject" className='frombutton' />

        </form>
    );
};

export default PatientsAppoinmentForm;