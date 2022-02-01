import { Paper, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import exprience from '../../../../images/icons/exprience.png';
import TimeBlock from '../home/TimeBlock';

const FreeAppoinments = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Paper
            style={{ backgroundColor: '#F3F3F4', paddingRight: '30px', padding: '20px', margin: '40px', marginLeft: '0px' }}
        >
            <Typography style={{ fontSize: '22px', fontWeight: 'bold' }}>
                Book an appointment for free
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} className='freeForm'>
                <Typography style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '16px' }}>
                    What’s your insurance plan?
                </Typography>


                <Paper style={{ paddingLeft: '14px' }}>
                    {/* <img src={exprience} alt="" /> */}
                    <input type="text" defaultValue="I’ll choose my insurance later" {...register("insurance")} className='freeInput' />
                </Paper>
                <Typography style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '16px' }}>
                    Has the patient seen this doctor before?
                </Typography>
                <div style={{ display: 'flex' }}>
                    <Paper className='freeInput'>
                        <lable>
                            <input type="radio"  {...register("No")} />No
                        </lable>
                    </Paper>
                    <Paper className='freeInput'>
                        <lable>
                            <input type="radio"  {...register("No")} />No
                        </lable>
                    </Paper>
                </div>
                <Typography style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '16px' }}>
                    Choose the type of appointment
                </Typography>
                <div style={{ display: 'flex' }}>
                    <Paper className='freeInput'>
                        <lable>
                            <input type="radio"  {...register("No")} />No
                        </lable>
                    </Paper>
                    <Paper className='freeInput'>
                        <lable>
                            <input type="radio"  {...register("No")} />No
                        </lable>
                    </Paper>
                </div>
                <Typography style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '16px' }}>
                    What’s your insurance plan?
                </Typography>
                <Paper style={{ padding: '10px' }}>
                    <TimeBlock></TimeBlock>
                </Paper>

                {/* <input type="submit" /> */}
            </form>
        </Paper>
    );
};

export default FreeAppoinments;