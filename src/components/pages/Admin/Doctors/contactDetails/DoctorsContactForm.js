import { Box } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const DoctorsContactForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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
                    <input type="tel" {...register("mobile")} />
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
                <Box className='rowItem itemBig'>
                    <label>Address</label> <br />
                    <input type="text" {...register("mobile")} />
                </Box>
                <Box className='rowItem itemBig'>
                    <label>Address 2nd line</label> <br />
                    <input type="text" {...register("mobile")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemSmall'>
                    <label>Zip code</label> <br />
                    <input type="number" {...register("zipcode")} />
                </Box>
                <Box className='rowItem itemMid'>
                    <label>City</label> <br />
                    <input type="text" {...register("city")} />
                </Box>
                <Box className='rowItem itemMid'>
                    <label>Country</label> <br />
                    <input type="text" {...register("country")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>VAT Number</label> <br />
                    <input type="number" {...register("vatNumber")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemSmall'>
                    <label>Preferred language</label> <br />
                    <select {...register("language")}>
                        <option value="Greek">Greek</option>
                        <option value="English">English</option>
                        <option value="other">other</option>
                    </select>
                </Box>
            </Box>
           

            <input type="submit" value="save changes" className='frombutton' style={{ width: '246px', height: '49px' }} />

        </form>
    );
};

export default DoctorsContactForm;