import React from 'react';
import { connect } from "react-redux";
import {
    Icon, Button, Row, Col, Avatar,Layout
} from 'antd';
const { Header } = Layout;


const MainHeader = ({collapsed, toggleCollapsed, ...othProps}) => {

    const { styleState } = othProps
    
    return (
        <Header className="header" style={{ background: "#fff" }}>
            
            <div className="logo" >Test for developer</div>

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

const mapStateToProps = ({ styleState }) => ({styleState})

export default connect(mapStateToProps)(MainHeader);