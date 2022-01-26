import { Container, Paper } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardWrapper } from '../../../styled/All.Styled';
import { doctorsSidebarData } from '../shared/AllSideBarData';
import HeaderNav from '../shared/HeaderNav';
import SubMenu from '../shared/SubMenu';

const DoctorsDashboard = () => {
    return (
        <DashboardWrapper>
        <Container>
            <div class="wrapper">
                <HeaderNav></HeaderNav>
                <div class="menu">
                    <Paper style={{ borderRadius: '10px' }}>
                        {doctorsSidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </Paper>
                </div>
                <div class="content">
                    <Outlet />
                </div>
            </div>
        </Container>
    </DashboardWrapper>
    );
};

export default DoctorsDashboard;