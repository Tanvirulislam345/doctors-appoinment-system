import { Outlet } from "react-router-dom";
import { Container, Paper } from "@material-ui/core";
import { DashboardWrapper } from "../../styled/All.Styled";
import HeaderNav from "./shared/HeaderNav";
import SubMenu from "./shared/SubMenu";
import { SidebarData } from "./AllSideBarData";

const Sidebar = () => {

  return (
    <DashboardWrapper>
      <Container>
        <div class="wrapper">
          <HeaderNav></HeaderNav>
          <div class="menu">
            <Paper style={{ borderRadius: '20px' }}>
              {SidebarData.map((item, index) => {
                console.log(index);
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

export default Sidebar;
