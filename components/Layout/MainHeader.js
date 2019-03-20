import React from "react";
import {connect} from "react-redux";
import { onSetLogout } from "../../state/actions/UserAction";
import { mapLevelName } from "../../services/Util";
import {Icon, Button, Row, Col, Avatar, Layout} from "antd";
import Router from "next/router";
const {Header} = Layout;


const MainHeader = ({
    collapsed, 
    toggleCollapsed, 
    userInf,
    onSetLogout,
     ...othProps}) => {
  //const { styleState } = othProps

  console.log("--userInf-->", userInf);

  return (
    <Header className="header" style={{background: "#fff"}}>
      <div className="logo">Test for developer</div>

      <Row
        style={{height: "100%", float: "right"}}
        justify="start"
        type="flex"
        align="middle"
      >
        <Col style={{lineHeight: "initial"}}>
          <Avatar size="20" icon="user" />
        </Col>
        <Col style={{lineHeight: "initial"}}>
          <span style={{color: "#fff", marginLeft: "10px"}}>
            {`สวัสดี, ${userInf.firstname} ${userInf.surname} ,ระดับตำแหน่ง ${mapLevelName(userInf.job_level)}`}</span>
        </Col>
        <Col style={{lineHeight: "initial"}}>
          <span
            onClick={()=>{
                onSetLogout();
                Router.push('/login')
            }}
            style={{marginLeft: "20px", color: "orange", fontWeight: "bold"}}
          >
            Logout
          </span>
        </Col>
      </Row>
    </Header>
  );
};

const mapStateToProps = ({styleState, userState}) => {
  return {
    styleState,
    userInf:userState.userInf
  };
};

export default connect(mapStateToProps, {onSetLogout})(MainHeader);
