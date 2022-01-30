import { Container, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardWrapper } from '../../../styled/All.Styled';
import { doctorsSidebarData } from '../shared/AllSideBarData';
import HeaderNav from '../shared/HeaderNav';
import SubMenu from '../shared/SubMenu';

const DoctorsDashboard = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <DashboardWrapper>
            <Container>
                <div className="wrapper">
                    <div class="header">
                        <Paper
                            onClick={showSidebar}
                            className='header-btn' >
                            Admin
                        </Paper>
                        <div>
                            <i class="fas fa-search" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
                            <i class="far fa-bell" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
                            <i class="far fa-user" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
                        </div >
                    </div >
                    <div className={sidebar ? 'hello' : 'menu'}>
                        <Paper style={{ borderRadius: '10px' }}>
                            {doctorsSidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />;
                            })}
                        </Paper>
                    </div>
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </Container>
        </DashboardWrapper>
    );
};

export default DoctorsDashboard;