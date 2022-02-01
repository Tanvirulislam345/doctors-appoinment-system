import { Grid, Typography } from '@mui/material';
import React from 'react';
import MyMap2 from './MyMap2';

const DoctorsAbout = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <Typography style={{ fontSize: '22px', fontWeight: 'bold', margin: '25px 0px' }}>
                    About Dr. Justin Lewis
                </Typography>
                <Typography style={{ fontSize: '18px' }}>
                    Dr. Sherer is a Board Certified Dermatologist who has been in private practice on Long Island since 2003. <br /><br />

                    Dr. Sherer trained at the Mount Sinai School of Medicine where he completed his residency and Dermatopharmacology fellowship during which he participated in numerous clinical trials for new medications used to treat skin conditions such as psoriasis, acne, eczema, hair loss, hirsutism, photoaging, wrinkles, Ichthyosis Vulgaris, actinic keratoses, athlete's foot, wound healing, and laser treatments. Dr. Sherer remains on staff at Mount Sinai as an Assistant Clinical Professor where he teaches both dermatology residents and medical students. <br /><br />

                    Dr. Sherer received his undergraduate degree from Tufts University and attended medical school at SUNY Downstate Medical College. He is a Fellow of the American Academy of Dermatology and has published over a dozen original articles in professional journals. He was awarded First Prize in the New York Academy of Medicine Resident's Research Competition and a grant from the National Institute of Health for his research leading to a potential treatment of a connective tissue disease called Pseudoxanthoma Elasticum.

                    Dr. Sherer grew up in Syosset and enjoys giving back to the community in which he grew up by participating in local skin cancer screenings and lecturing at local schools and community centers. He is on staff at Mount Sinai Medical Center in Manhattan, North Shore/LIJ Huntington Hospital, North Shore/LIJ Plainview Hospital, North Shore/LIJ Syosset Hospita
                </Typography>

                <Typography style={{ fontSize: '22px', fontWeight: 'bold', margin: '25px 0px' }}>
                    Education and background
                </Typography>
                <Typography style={{ fontSize: '19px', fontWeight: 'bold' }}>
                    Specialties
                </Typography>
                <Typography style={{ fontSize: '18px' }}>
                    Dermatologist
                </Typography>
                <Typography style={{ fontSize: '19px', fontWeight: 'bold', marginTop: '25px' }}>
                    Board certifications
                </Typography>
                <Typography style={{ fontSize: '18px' }}>
                    American Board of Dermatology
                </Typography>
                <Typography style={{ fontSize: '19px', fontWeight: 'bold', marginTop: '25px' }}>
                    Education and training
                </Typography>
                <Typography style={{ fontSize: '18px' }}>
                    Medical School - State University of New York, Downstate Medical Center <br />
                    School of Medicine at Mount Sinai, Residency in Dermatology<br />
                    Icahn School of Medicine at Mount Sinai, Fellowship in Dermatopharmacology<br />
                </Typography>
                <Typography style={{ fontSize: '19px', fontWeight: 'bold', marginTop: '25px' }}>
                    Awards and publications
                </Typography>
                <Typography style={{ fontSize: '18px' }}>
                    First Prize in the New York Academy of Medicine Resident’s Research Competition
                    Grant from the National Institute of Health
                    Sherer DW, Singer G, Uribarri J, Phelps RG, Sapadin AN, Freund KB, Yanuaai
                    W, Lebwohl M. Oral Phosphate Binders In the Treatment of Pseudoxanthoma
                </Typography>
                <Typography style={{
                    fontSize: '18px', fontWeight: '500', color: '#428FC3', marginTop: '10px'
                }}>
                    view all
                </Typography>
                <MyMap2></MyMap2>
            </Grid>
        </Grid >
    );
};

export default DoctorsAbout;