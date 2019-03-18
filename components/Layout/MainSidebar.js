import React from 'react';
import {
    Layout, Menu, Breadcrumb, Icon
} from 'antd';
import MainMenu from "./MainMenu";

const { Sider } = Layout;

const MainSidebar = ({collapsed}) => {

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={270}
            style={{ background: '#fff', height: '90vh' }}>

            <MainMenu />
        </Sider>
    );
};

export default MainSidebar;