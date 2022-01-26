import { Button } from '@material-ui/core';
import { Paper } from '@mui/material';
import React from 'react';

const HeaderNav = () => {
    return (
        <div class="header">
            <Paper
                className='header-btn'
            >
                Admin
            </Paper>
            <div>
                <i class="fas fa-search" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
                <i class="far fa-bell" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
                <i class="far fa-user" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
            </div>
        </div>
    );
};

export default HeaderNav;