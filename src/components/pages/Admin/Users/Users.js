import { Container, Divider, Paper } from '@material-ui/core';
import React from 'react';
import { HeaderCaption, HeaderWrapper } from '../../../../styled/All.Styled';
import UsersList from './UsersList';



const Users = () => {
    return (
        <Paper style={{borderRadius: '10px'}}>
            <Container>
                <HeaderWrapper>
                    <HeaderCaption>
                        Users
                    </HeaderCaption>
                    <i class="fas fa-search fa-lg" style={{ color: '#EDF1F5', padding: '0px 10px' }}></i>
                </HeaderWrapper>
                <Divider style={{ marginTop: '10px', marginBottom: '20px' }} />
                <UsersList></UsersList>
            </Container>
        </Paper>
    );
};

export default Users;