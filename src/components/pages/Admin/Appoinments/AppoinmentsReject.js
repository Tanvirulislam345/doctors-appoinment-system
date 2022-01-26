import { Container, Divider, Paper, Box } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { HeaderCaption, HeaderWrapper } from '../../../../styled/All.Styled';
import PatientsAppoinmentsList from '../Patients/patientsAppoinmnets/PatientsAppoinmentsList';

const AppoinmentsReject = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Paper style={{ borderRadius: '20px' }}>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                        Rejected Appoinments
                    </HeaderCaption>
                    <i class="fas fa-search fa-lg" style={{ color: '#EDF1F5', padding: '0px 10px' }}></i>
                </HeaderWrapper>
                <Divider style={{ marginTop: '10px', marginBottom: '20px' }} />
                <PatientsAppoinmentsList></PatientsAppoinmentsList>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className='rowContainer'>
                        <Box className='rowItem'>
                            <label>Doctor</label> <br />
                            <input type="text" {...register("doctor")} />
                        </Box>
                        <Box className='rowItem'>
                            <label>Patient</label> <br />
                            <input type="text" {...register("patient")} />
                        </Box>
                        <Box className='rowItem'>
                            <label>IP</label> <br />
                            <input type="number" {...register("ipaddress")} />
                        </Box>
                    </Box>
                    <Box className='rowContainer' style={{ display: 'flex' }}>
                        <Box className='rowItem'>
                            <label>Date</label> <br />
                            <input type="date"  {...register("example")} />
                        </Box>
                        <Box className='rowItem itemSmall'>
                            <label>time</label> <br />
                            <input type="time"  {...register("example")} />
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
                            <label>Clinic</label> <br />
                            <input type="text"  {...register("clinic")} />
                        </Box>
                        <Box className='rowItem'>
                            <label>Insurance</label> <br />
                            <input type="text"   {...register("Insurance")} />
                        </Box>
                    </Box>
                    <Box className='rowContainer' style={{ display: 'flex' }}>
                        <Box className='rowItem'>
                            <label>Patient Phone</label> <br />
                            <input type="tel"  {...register("patientsphone")} />
                        </Box>
                        <Box className='rowItem'>
                            <label>Patient Email</label> <br />
                            <input type="email"   {...register("patientsEmail")} />
                        </Box>
                    </Box>
                    <Box className='rowContainer' style={{ display: 'flex' }}>
                        <Box className='rowItem'>
                            <label>First Time visite</label> <br />
                            <input type="text"  {...register("visitetime")} />
                        </Box>
                        <Box className='rowItem'>
                            <label>Appointment booked for</label> <br />
                            <input type="text"   {...register("blockappoinments")} />
                        </Box>
                    </Box>
                    <input type="submit" value="Approved" className='frombutton' />
                    <input type="submit" value="RESCHEDULE" className='frombutton' />
                </form>

            </Container>
        </Paper>
    );
};

export default AppoinmentsReject;