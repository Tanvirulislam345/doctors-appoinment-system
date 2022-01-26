
import {Container , Paper } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardWrapper } from '../../../styled/All.Styled';
import { usersSideBarData } from '../shared/AllSideBarData';
import HeaderNav from '../shared/HeaderNav';
import SubMenu from '../shared/SubMenu';

const UsersDashBoard = () => {
    return (
        <DashboardWrapper>
        <Container>
            <div class="wrapper">
                <HeaderNav></HeaderNav>
                <div class="menu">
                    <Paper style={{ borderRadius: '20px' }}>
                        {usersSideBarData.map((item, index) => {
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

export default UsersDashBoard;