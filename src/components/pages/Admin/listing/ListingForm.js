import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import fileUploader from '../../../../images/icons/fileUploader.png';
import plusICon from "../../../../images/icons/plusIcon.png";

const ListingForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const [myfiles, setMyFiles] = useState(null);
    const inputRef = useRef(HTMLInputElement);

    const getImagePreview = (e) => {
        let image = URL.createObjectURL(e.target.files[0]);
        let imagediv = document.getElementById("preview");
        imagediv.src = image;
        setMyFiles(e.target.files[0]);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className='rowContainer'>
                <Box className='rowItem listItem'>
                    <label>First Name</label> <br />
                    <input type="text" {...register("firstName")} />
                </Box>
                <Box className='rowItem listItem'>
                    <label>Last Name</label> <br />
                    <input type="text" {...register("lastName")} />
                </Box>
                <Box className='rowItem listItem'>
                    <label>Title</label> <br />
                    <input type="text" {...register("title")} />
                </Box>
                <Box className='rowItem listItem'>
                    <label>After Last Name</label> <br />
                    <input type="text" {...register("afterlastName")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemBig'>
                    <label>Primary Specialty</label> <br />
                    <input type="text" {...register("primarySpecialty")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemBig'>
                    <label>More Specialties</label> <br />
                    <input type="text" {...register("moreSpecialties")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemBig'>
                    <label>License number</label> <br />
                    <input type="text" {...register("licenseNumber")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemBig'>
                    <label>Languages Spoken</label> <br />
                    <input type="text" {...register("languagesSpoken")} />
                </Box>
            </Box>
            <Typography style={{ fontSize: '16px', fontWeight: '500', marginTop: '40px' }}>
                Doctor Features
            </Typography>
            <Box className="rowContainer">
                <Box className="preferences" style={{ display: 'flex', marginTop: '34px' }}>
                    <Box className="items">
                        <input type="checkbox" {...register("doctorFeatures1")} />
                        <span style={{ marginRight: '40px' }}>Video consultation</span>
                    </Box>

                    <Box className="items">
                        <input type="checkbox" {...register("doctorFeatures2")} />
                        <span style={{ marginRight: '40px' }}>Public insurance</span>
                    </Box>

                    <Box className="items">
                        <input type="checkbox" {...register("doctorFeatures3")} />
                        <span style={{ marginRight: '40px' }}> Undertakes children up to 12 years old</span>
                    </Box>
                </Box>
            </Box>
            <Divider style={{ marginTop: '40px', marginBottom: '20px' }} />
            <label style={{ fontSize: '21px', fontWeight: 'bold', color: 'black' }}>Gallery</label>
            <Box style={{ marginTop: '28px' }}>
                <label>Main images</label> <br />
                <Box>
                    <img src="" alt="" id="preview" style={{ height: '100px', width: '100px', borderRadius: '100%', marginTop: '20px' }} />
                </Box>
            </Box>
            <Box style={{ marginTop: '40px' }}>
                <label>Gallery images</label> <br />
                <input type="file" {...register("preference1")}
                    accept="image/*"
                    {...register("imageFile")}
                    onChange={getImagePreview}
                    style={{ display: "none" }}
                    ref={inputRef}
                />
                <img src={fileUploader} alt="" style={{ marginTop: '20px' }}
                    onClick={() => inputRef.current.click()}
                />
            </Box>
            <Divider style={{ marginTop: '40px', marginBottom: '20px' }} />
            <label style={{ fontSize: '21px', fontWeight: 'bold', color: 'black' }}>Social Media</label>
            <Box className='rowContainer'>
                <Box className='rowItem urlItem'>
                    <label style={{ marginRight: '20px' }}>Facebook</label>
                    <input type="url" {...register("facebook")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem urlItem'>
                    <label style={{ marginRight: '20px' }}>LinkedIn</label>
                    <input type="url" {...register("linkedIn")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem urlItem'>
                    <label style={{ marginRight: '20px' }}>Instagram</label>
                    <input type="url" {...register("instagram")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem urlItem'>
                    <label style={{ marginRight: '20px' }}>Website</label>
                    <input type="url" {...register("website")} />
                </Box>
            </Box>
            <Divider style={{ marginTop: '40px', marginBottom: '20px' }} />
            <label style={{ fontSize: '21px', fontWeight: 'bold', color: 'black' }}>Clinic Locations</label>
            <Box className='rowContainer'>
                <Box className='rowItem itemBig'>
                    <label>Clinic Name</label> <br />
                    <input type="text" {...register("clinicName")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemBig'>
                    <label>Address</label> <br />
                    <input type="text" {...register("address")} />
                </Box>
                <Box className='rowItem itemBig'>
                    <label>Address line 2</label> <br />
                    <input type="text" {...register("addressline2")} />
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
                    <label>Landline</label> <br />
                    <input type="text" {...register("landline")} />
                </Box>
                <Box className='rowItem'>
                    <label>Second Landline</label> <br />
                    <input type="text" {...register("secondLandline")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem itemBig'>
                    <label>Email</label> <br />
                    <input type="email" {...register("email")} />
                </Box>
                <Box className='rowItem itemBig' style={{ display: 'flex', alignItems: 'end' }}>
                    <Button variant="outlined" style={{ padding: '8px 25px' }}>Pin on map</Button>
                </Box>
            </Box>
            <Box className="rowContainer">
                <Box className="preferences" style={{ display: 'flex', marginTop: '34px' }}>
                    <Box className="items">
                        <input type="checkbox" {...register("disabledAccess")} />
                        <span style={{ marginRight: '40px' }}>Disabled Access</span>
                    </Box>

                    <Box className="items">
                        <input type="checkbox" {...register("cashpayments")} />
                        <span style={{ marginRight: '40px' }}>Cash payments</span>
                    </Box>

                    <Box className="items">
                        <input type="checkbox" {...register("creditCardPayments")} />
                        <span style={{ marginRight: '40px' }}>Credit card payments</span>
                    </Box>
                </Box>
            </Box>
            <Divider style={{ margin: "25px 0px" }} />
            <Box>
                <img src={plusICon} alt="deleteICon" />
                <span style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '17px' }}>Add another location</span>
            </Box>
            <input type="submit" value="save" className='frombutton' />
        </form>
    );
};

export default ListingForm;