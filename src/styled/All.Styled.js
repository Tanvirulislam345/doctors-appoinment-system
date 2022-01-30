import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashboardWrapper = styled.div`
  background-color: #EAF2FF;
  min-height: 100vh;
  padding: 40px 0px;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  color: #898D91;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 18px;
  
  &:hover {
    background: #EAF2FF;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid green;
    border-left: 4px solid green;
  }
`;

export const SidebarNav = styled.div`
  grid-column: span 2;
  border-radius: 20px;
  min-width: 260px;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
 
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #898D91;
  font-size: 18px;
  
  &:hover {
    background: #EAF2FF;
    color: #87B2F7;
    border: 1px solid green;
    border-left: 4px solid green;
    border-radius: 10px;
    cursor: pointer;
  };
  &:target{
    color: black;
  }
`;

export const HeaderCaption = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #333333;
  `;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 34px;
  `;


