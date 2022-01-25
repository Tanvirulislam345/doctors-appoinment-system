import { Button } from '@material-ui/core';
import React from 'react';

const HeaderNav = () => {
    return (
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
                <i class="fas fa-search" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
                <i class="far fa-bell" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
                <i class="far fa-user" style={{ padding: '10px', borderRadius: '50%', marginRight: '20px', backgroundColor: 'white', color: '#D0DBE5' }}></i>
            </div>
        </div>
    );
};

export default HeaderNav;