import { Box, Divider, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const PatientsPreferenceForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="body1"
          gutterBottom
          style={{ opacity: "0.7", padding: "10px 0px" }}
        >
          I’m interested in
        </Typography>
        <Box className="rowContainer">
          <Box className="preferences">
            <Box className="items">
              <input type="checkbox" {...register("preference1")} />
              <span>Medical news</span>
            </Box>
  
            <Box className="items">
              <input type="checkbox" {...register("preference1")} />
              <span>Business updates</span>
            </Box>
  
            <Box className="items">
              <input type="checkbox" {...register("preference1")} />
              <span>Blog updates</span>
            </Box>
  
            <Divider style={{ margin: "25px 0px" }} />
            <Box className="items">
              <input type="checkbox" {...register("preference1")} />
              <span>I want to receive newsletters from best doctor.gr</span>
            </Box>
  
          </Box>
        </Box>
        
        <input
          type="submit"
          value="save changes"
          className="frombutton"
          style={{ width: "250px" }}
        />
      </form>
    );
};

export default PatientsPreferenceForm;