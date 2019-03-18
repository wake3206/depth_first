import React, { useState } from 'react';
import {
    Layout
} from 'antd';
import MainHeader from "./MainHeader";
import MainSidebar from "./MainSidebar";
import MainBreadcrumb from "./MainBreadcrumb";

const { Content } = Layout;


const MainLayout = ({children}) => {

    const [collapsed, setCollape] = useState(true);

    const toggleCollapsed = () => {
        setCollape(!collapsed);
    }


    return (
        <Layout id="components-layout">
            <MainHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

            <Layout>
                <MainSidebar collapsed={collapsed} />

                <Layout style={{ padding: '0 24px 24px' }}>
                    <MainBreadcrumb />
                    <Content className="main-content" >{children}</Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default MainLayout;