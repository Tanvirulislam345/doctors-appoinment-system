import { Box } from "@mui/material";
import React, { useState } from "react";
import { DropdownLink, SidebarLabel, SidebarLink } from "../../../styled/All.Styled";


const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);


    return (
        <>
            <SidebarLink to={item.path}
                onClick={item.subNav && showSubnav}>
                <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={item.icon} alt="home" style={{width: '33px', height: '27px'}}/>
                <SidebarLabel>{item.title}</SidebarLabel>
                </Box>
                <Box>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </Box>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index} style={{paddingLeft: '80px'}}>
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default SubMenu;