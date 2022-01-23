import { Box } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const ReviewForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>First Name</label> <br />
                    <input defaultValue="test" {...register("firstName")} />
                </Box>
                <Box className='rowItem'>
                    <label>First Name</label> <br />
                    <input defaultValue="test" {...register("lastName")} />
                </Box>
            </Box>
            <Box className='rowContainer' style={{ display: 'flex' }}>
                <Box className='rowItem itemSmall'>
                    <label>Score view</label> <br />
                    <input type="number" defaultValue="test" {...register("example")} />
                </Box>
            </Box>
            <Box className='rowContainer' style={{ display: 'flex' }}>
                <Box className='rowItem'>
                    <label>Comment</label> <br />
                    <textarea rows='7' defaultValue="test" {...register("example")} />
                </Box>
            </Box>

            <input type="submit" value="Approved" className='frombutton' />
            <input type="reset" value="Reject" className='frombutton' />

        </form>
    );
};

export default ReviewForm;