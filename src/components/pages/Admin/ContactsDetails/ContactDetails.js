import { Paper } from '@material-ui/core';
import React from "react";
import { useForm } from "react-hook-form";

const ContactDetails = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
    return (
        <Paper>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type='date' {...register("date", { required: true })} />
      
      <input type="submit" />
    </form>
        </Paper>
    );
};

export default ContactDetails;