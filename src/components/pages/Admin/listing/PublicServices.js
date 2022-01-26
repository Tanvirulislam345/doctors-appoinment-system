import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import { HeaderCaption, HeaderWrapper } from "../../../../styled/All.Styled";
import { Container, Divider } from "@mui/material";
import { Box } from "@mui/system";
import deletIcon from "../../../../images/icons/deleteIcon.png";
import menuICon from "../../../../images/icons/menuICon.png";
import plusICon from "../../../../images/icons/plusIcon.png";




const PublicServices = () => {


const [allfiles, setFiles] = useState([
  {  menuICon, name: "Visit", label: "Edit", deletIcon },
  {  menuICon, name: "Video visit", label: "Edit", deletIcon },
  {  menuICon, name: "Botox", label: "Edit", deletIcon }
]);

  return (
    <Paper style={{minHeight: '100vh'}}>
      <Container>
        <HeaderWrapper>
          <HeaderCaption>Public services</HeaderCaption>
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
         <Divider style={{ margin: "25px 0px" }} />
            <Box>
              <img src={plusICon} alt="deleteICon" />
              <span style={{fontSize: '16px', fontWeight: 'bold', marginLeft: '17px'}}>Add new service</span>
            </Box>
      </Container>
    </Paper>
  );
};

export default PublicServices;
