import { Container, Paper } from '@material-ui/core';
import { Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { DashboardWrapper } from '../../../styled/All.Styled';
import { doctorsSidebarData } from '../shared/AllSideBarData';
import HeaderNav from '../shared/HeaderNav';
import SubMenu from '../shared/SubMenu';

const DoctorsDashboard = () => {
    const { sidebar } = useAuth();

    return (
        <DashboardWrapper>
            <Container>
                <div className="wrapper">
                    <HeaderNav></HeaderNav>
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