import { Container, Paper } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { DashboardWrapper } from '../../../styled/All.Styled';
import { mainSideBarData } from '../shared/AllSideBarData';
import HeaderNav from '../shared/HeaderNav';
import SubMenu from '../shared/SubMenu';

const MainDashbord = () => {
    const { sidebar } = useAuth();
    return (
        <DashboardWrapper>
            <Container>
                <div class="wrapper">
                    <HeaderNav></HeaderNav>
                    <div className={sidebar ? 'hello' : 'menu'}>
                        <Paper style={{ borderRadius: '10px' }}>
                            {mainSideBarData.map((item, index) => {
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

export default MainDashbord;