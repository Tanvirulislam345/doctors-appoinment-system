import React, { useState } from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { Box, Button, Container, Grid, Paper } from "@material-ui/core";
import "./Sidebar.css";
import Doctors from "../pages/Admin/Doctors/Doctors";
import Patients from "../pages/Admin/Patients/Patients";
import Users from "../pages/Admin/Users/Users";
import ContactDetails from "../pages/Admin/ContactsDetails/ContactDetails";


const Nav = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: "#fff";
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Box
      style={{
        backgroundColor: "#EAF2FF",
        minHeight: "100vh",
        padding: "40px 0px",
      }}
    >
      <Container>
        <div class="wrapper">
          <div class="header">
          <Button
              variant="contained"
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                backgroundColor: "#508FF4",
                color: "white",
                borderRadius: "30px",
                padding: "0px 17px",
                textTransform: "inherit",
              }}
            >
              Admin
            </Button>
            <div>
            <i class="far fa-user" style={{padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5'}}></i>
            <i class="far fa-bell" style={{padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5'}}></i>
            <i class="far fa-user" style={{padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5'}}></i>
            </div>
          </div>
          <div class="menu">
          <Paper style={{borderRadius: '20px'}}>
              {SidebarData.map((item, index) => {
                console.log(index);
                return <SubMenu item={item} key={index} />;
              })}
            </Paper>
          </div>
          <div class="content">
            <Doctors></Doctors>
            <Patients></Patients>
            <Users></Users>
            <ContactDetails></ContactDetails>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Sidebar;
