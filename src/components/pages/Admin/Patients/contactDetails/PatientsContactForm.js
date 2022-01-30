import { Box } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const PatientsContactForm = () => {
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:7000/patients-contact-details', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Patients details submitted successfully.');
                    reset();
                }
            })
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>First Name</label> <br />
                    <input type="text" {...register("firstName")} />
                </Box>
                <Box className='rowItem'>
                    <label>First Name</label> <br />
                    <input type="text" {...register("lastName")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemBig'>
                    <label>Email</label> <br />
                    <input type="email" {...register("email")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>Land line</label> <br />
                    <input type="tel" {...register("landline")} />
                </Box>
                <Box className='rowItem'>
                    <label>Mobile</label> <br />
                    <input type="tel" {...register("mobile")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>Date of birth</label> <br />
                    <input type="date" {...register("birthdate")} />
                </Box>
                <Box className='rowItem itemSmall'>
                    <label>Gender</label> <br />
                    <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemSmall'>
                    <label>Postal Code</label> <br />
                    <input type="number" {...register("postalcode")} />
                </Box>
                <Box className='rowItem itemSmall'>
                    <label>Prefer language</label> <br />
                    <select {...register("language")}>
                        <option value="Greek">Greek</option>
                        <option value="English">English</option>
                        <option value="other">other</option>
                    </select>
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemBig'>
                    <label>National Registration Number (AMKA)</label> <br />
                    <input type="number" {...register("amka")} />
                </Box>
                <Box className='rowItem itemBig'>
                    <label>Social Security member registration number (AMA)</label> <br />
                    <input type="number" {...register("ama")} />
                </Box>
            </Box>


            <input type="submit" value="save changes" className='frombutton' />

        </form>
    );
};

export default PatientsContactForm;