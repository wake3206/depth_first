import React, {Component} from "react";
import {connect} from "react-redux";
import Router from "next/router";
import {Form, Icon, Input, Button, Divider, Alert} from "antd";
import {onSetLogin} from "../../state/actions/UserAction";

class LoginMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        let resUser = await this.props.onSetLogin(values);

        if (resUser !== null) {
          Router.push("/");
        } else {
          this.setState({showAlert: true});
        }
      }
    });
  };

  onClose = e => {
    this.setState({showAlert: false});
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("code", {
              rules: [{required: true, message: "Please input your emp code!"}]
            })(
              <Input
                prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}} />}
                placeholder="Emp code"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{required: true, message: "Please input your Password!"}]
            })(
              <Input
                prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}} />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>

          {this.state.showAlert && <Alert
            message="Login wrong"
            description="รหัสพนักงาน ไม่ถูกต้อง"
            type="error"
            closable
            onClose={this.onClose}
          />}
        </Form>
        <div style={{position: "absolute", bottom: "30px"}}>
          <Divider orientation="left">Info</Divider>
          <div style={{float: "left", marginLeft: "20px"}}>
            <span>{`พนักงานทั่วไป `}</span>
            <span>
              code:<b>DF-021</b>
            </span>
            <span>
              pass:<b>eeee</b>
            </span>
          </div>
          <div style={{float: "left", marginLeft: "20px"}}>
            <span>{`ผู้จัดการ `}</span>
            <span>
              code:<b>DF-022</b>
            </span>
            <span>
              pass:<b>eeee</b>
            </span>
          </div>
          <div style={{float: "left", marginLeft: "20px"}}>
            <span>{`พนักงานการเงิน `}</span>
            <span>
              code:<b>DF-023</b>
            </span>
            <span>
              pass:<b>eeee</b>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Form.create({name: "normal_login"})(
  connect(
    null,
    {onSetLogin}
  )(LoginMain)
);
