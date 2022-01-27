import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import { HeaderCaption, HeaderWrapper } from "../../../../styled/All.Styled";
import { Container, Divider } from "@mui/material";
import { Box } from "@mui/system";
import deletIcon from "../../../../images/icons/deleteIcon.png";
import menuICon from "../../../../images/icons/menuICon.png";
import plusICon from "../../../../images/icons/plusIcon.png";
import { useForm } from 'react-hook-form';

const PrivateAppoinments = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    const [allfiles, setFiles] = useState([
        {  menuICon, name: "Video visit", label: "Edit", deletIcon },
        {  menuICon, name: "Acne treatment", label: "Edit", deletIcon },
        {  menuICon, name: "Visit", label: "Edit", deletIcon },
        {  menuICon, name: "Botox", label: "Edit", deletIcon },
        {  menuICon, name: "Laser hair removal", label: "Edit", deletIcon },
      ]);
      
    return (
        <Paper style={{minHeight: '100vh', paddingBottom: '60px'}}>
        <Container>
          <HeaderWrapper>
            <HeaderCaption>Private appointment services</HeaderCaption>
            <i
              class="fas fa-search fa-lg"
              style={{ color: "#EDF1F5", padding: "0px 10px" }}
            ></i>
          </HeaderWrapper>
          <Divider style={{ marginTop: '10px', marginBottom: '20px' }} />
          {
              allfiles.map((data, index) => <Box 
              data={data}
              key={index} 
              >
                      <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '730px', marginBottom: '6px'}}>
                        <Box style={{display: 'flex',  alignItems: 'center'}}>
                        <img src={data.menuICon} alt="deleteICon" />
                        <span style={{fontSize: '16px', fontWeight: 'bold', marginLeft: '17px'}}>{data.name}</span>
                        </Box>
                        <Box>
                        <span style={{fontSize: '16px', fontWeight: 'bold', marginRight: '17px'}}>{data.label}</span>
                        <img src={data.deletIcon} alt="deleteICon" />
                        </Box>
                      </Box>
                  </Box>
              )
          }

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>Service</label> <br />
                    <input type="text" {...register("Service")} />
                </Box>
            </Box>
          <Box className='rowContainer'>
            <Box className="preferences" style={{marginTop: '34px'}}>
              <Box className="items">
              <input type="checkbox" {...register("preference1")} />
              <span>Expertise</span>
              </Box>
            </Box>
            </Box>
          <Box className='rowContainer'>
                <Box className='rowItem itemSmall'>
                    <label>Years of experience</label> <br />
                    <input type="number" {...register("exprience")} />
                </Box>
                <Box className='rowItem itemSmall'>
                    <label>Cases taken</label> <br />
                    <input type="number" {...register("case")} />
                </Box>
            </Box>
          <Box className='rowContainer'>
                <Box className='rowItem itemSmall'>
                    <label>Cost minimum</label> <br />
                    <input type="number" {...register("costMin")} />
                </Box>
                <Box className='rowItem itemSmall'>
                    <label>Cost maximum</label> <br />
                    <input type="number" {...register("contMax")} />
                </Box>
            </Box>
            
            <Box className='rowContainer'>
                <Box className='rowItem urlItem'>
                <label>Const text</label> <br />
                    <input type="password" {...register("confirmPassword")} />
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem urlItem'>
                <label>Treatment text</label> <br />
                    <input type="password" {...register("confirmPassword")} />
                </Box>
            </Box>
            <input type="submit" value="save" className='frombutton' />
        </form>
           <Divider style={{ margin: "25px 0px" }} />
              <Box>
                <img src={plusICon} alt="deleteICon" />
                <span style={{fontSize: '16px', fontWeight: 'bold', marginLeft: '17px'}}>Add new service</span>
              </Box>
        </Container>
      </Paper>
    );
};

export default PrivateAppoinments;