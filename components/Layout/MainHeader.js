import React from 'react';
import {
    Icon, Button, Row, Col, Avatar,Layout
} from 'antd';
const { Header } = Layout;

const MainHeader = ({collapsed, toggleCollapsed}) => {
 
    return (
        <Header className="header" style={{ background: "#fff" }}>
            <Button
                className="btn-collape-sidebar"
                type="primary"
                onClick={toggleCollapsed} >

                <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            <div className="logo" >Heng IC Process</div>

            <Row
                style={{ height: '100%', float: 'right' }}
                justify="start"
                type="flex"
                align="middle">

                <Col style={{ lineHeight: 'initial' }}><Avatar size="20" icon="user" /></Col>
                <Col style={{ lineHeight: 'initial' }}><span style={{ color: '#fff', marginLeft: '10px' }}>ทดสอบ</span></Col>
            </Row>

        </Header>
    );
};

export default MainHeader;