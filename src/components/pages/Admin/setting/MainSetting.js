import { Container, Divider, Paper, Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { HeaderCaption, HeaderWrapper } from '../../../../styled/All.Styled';
import plusICon from "../../../../images/icons/plusIcon.png";
const MainSetting = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Paper style={{ borderRadius: '20px' }}>
        <Container>
            <HeaderWrapper>
                <HeaderCaption>
                Specialties
                </HeaderCaption>
            </HeaderWrapper>
            <Divider style={{ marginTop: '10px', marginBottom: '20px' }} />
    <TableContainer className="tableContainer">
      <Table  size="small" aria-label="a dense table">
        <TableHead className="tableHeader">
          <TableRow  className="tableRow">
            <TableCell>Specialty</TableCell>
            <TableCell>Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          <TableRow className="tableRow">
            <TableCell>Tanvir</TableCell>
            <TableCell>12/ 11/ 23</TableCell>
            <TableCell>
              <i class="fas fa-ellipsis-h"></i>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Box style={{marginTop: '25px'}}>
              <img src={plusICon} alt="deleteICon" />
              <span style={{fontSize: '16px', fontWeight: 'bold', marginLeft: '17px'}}>Add new service</span>
            </Box>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box className='rowContainer'>
                <Box className='rowItem'>
                    <label>Specialty</label> <br />
                    <input type="text" {...register("firstName")} />
                </Box>
                <Box className='rowItem'>
                    <label>Parent</label> <br />
                    <input type="text" placeholder='None' {...register("lastName")} />
                    <i class="fas fa-search" style={{marginLeft: '-30px'}}></i>
                </Box>
            </Box>
            <Box className='rowContainer'>
                <Box className='rowItem urlItem'>
                <label>URL slug</label> <br />
                <input type="url" {...register("slugurl")} />
                </Box>
            </Box>
            <input type="submit" value="save" className='frombutton' />
        </form>
        </Container>
    </Paper>
    );
};

export default MainSetting;