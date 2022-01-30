import { Box } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const ReviewForm = () => {

    const { register, reset, handleSubmit } = useForm();

    const onSubmit = data => {
        const today = new Date().toLocaleDateString();
        // console.log(today);
        const newData = {
            ...data,
            date: today,
            approved: "no"
        }

        axios.post('http://localhost:7000/patients-reviews', newData)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('your reviews submitted successfully.');
                    reset();
                }
            })
        // console.log(newData);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>Patient First Name</label> <br />
                    <input defaultValue="Barbara" {...register("firstName")} />
                </Box>
                <Box className='rowItem'>
                    <label>Patient Last Name Initial</label> <br />
                    <input defaultValue="Aston" {...register("lastName")} />
                </Box>
            </Box>
            <Box className='rowContainer' style={{ display: 'flex' }}>
                <Box className='rowItem itemSmall'>
                    <label>Review Score</label> <br />
                    <input type="text" defaultValue="4.77" {...register("reviewscore")} />
                </Box>
            </Box>
            <Box className='rowContainer' style={{ display: 'flex' }}>
                <Box className='rowItem'>
                    <label>Comment</label> <br />
                    <textarea rows='7' defaultValue="The doctor was on time and very understanding. I would highly recommend her." {...register("comment")} maxLength="100" />
                </Box>
            </Box>

            <input type="submit" value="Approved" className='frombutton' />
            <input type="reset" value="Reject" className='frombutton' />

        </form>
    );
};

export default ReviewForm;