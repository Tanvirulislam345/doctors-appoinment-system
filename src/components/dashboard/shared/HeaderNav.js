import { Paper } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const HeaderNav = () => {
    const { setSidebar, sidebar } = useAuth();
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div class="header">
            <Paper
                onClick={showSidebar}
                className='header-btn' >
                Admin
            </Paper>
            <Paper
                className='header-btn1' >
                Admin
            </Paper>
            <div>
                <i class="fas fa-search" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
                <i class="far fa-bell" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
                <i class="far fa-user" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
            </div >
        </div >
    );
};

export default HeaderNav;