import React from "react";
import { connect } from "react-redux";
import {Layout, Menu, Breadcrumb, Icon, Button} from "antd";
import { onSetToggleSidebar } from "../../state/actions/StyleAction";
import MainMenu from "./MainMenu";

const {Sider} = Layout;

const MainSidebar = ({collapsed, onSetToggleSidebar}) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={150}
      style={{background: "#fff", height: "100vh"}}
    >
      <Button
        style={{width:'100%', height:'50px'}}
        className="btn-collape-sidebar"
        type="primary"
        onClick={()=>onSetToggleSidebar(!collapsed)}
      >
        <Icon type={collapsed ? "menu-unfold" : "menu-fold"} />
      </Button>
      <MainMenu />
    </Sider>
  );
};

const mapStateToProps = (state) => {

	return {
		collapsed:state.styleState.collapeSidebar,

	}
}
//onSetToggleSidebar
export default connect(mapStateToProps, {onSetToggleSidebar})(MainSidebar);
