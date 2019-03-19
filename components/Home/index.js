import React from "react";
import {Layout} from "antd";
const {Content} = Layout;
import MainBreadcrumb from "../Layout/MainBreadcrumb";

const Home = () => {
  return (
    <div>
      <MainBreadcrumb />
      <Content className="main-content">
        <div id="head-home-page">TEST FOR DEVELOPER.</div>
      </Content>
    </div>
  );
};

export default Home;
