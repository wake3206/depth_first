import React, {useState} from "react";
import {connect} from "react-redux";
import {Layout} from "antd";
import MainHeader from "./MainHeader";
import MainSidebar from "./MainSidebar";
import {setWidthCollapeBtn} from "../../state/actions/StyleAction";

const {Content} = Layout;

const MainLayout = ({children, ...othProps}) => {
 
  return (
    <Layout id="components-layout" hasSider >
      <MainSidebar  />
      <Layout >
        <MainHeader />
        <Layout style={{padding: "0 24px 24px"}}>
					{children}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default connect(
  null,
  {setWidthCollapeBtn}
)(MainLayout);
