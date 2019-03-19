import React from "react";
import { connect } from "react-redux";
import {
  Form, Button,InputNumber, Input ,Modal
} from 'antd';
import { setFormData } from "../../../state/actions/CashAction";

class AddOrderForm extends React.Component {

  state = {
    saving:false
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields( async (err, values) => {
      if (err) {
        return;
      }

      //console.log('Received values of form: ',  values);
      this.setState({saving:true})
      await this.props.setFormData(values);
      this.setState({saving:false})

      this.props.form.resetFields();
      this.props.handleCancel()

      Modal.success({
        title: 'บันทึกสำเร็จ',
        content: 'กด ok เพื่อปิดหน้าต่าง',
      });


    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const config = {
      rules: [{ type: 'string', required: true, message: 'Please type' }],
    };


    //console.log('--->',this.props.cash);
    
    
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="คำอธิบาย"
        >
          {getFieldDecorator('description', config)(
            <Input.TextArea rows={4} style={{width:350}} />
          )}
        </Form.Item>
        <Form.Item
          label="จำนวน"
        >
          {getFieldDecorator('amount', { initialValue: 1 })(
            <InputNumber min={1} max={10} />
          )}
          <span className="ant-form-text"> บาท</span>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button 
            loading={this.state.saving}
            type="primary" 
            htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    cash:state.cash
  }
}

export default Form.create({ name: 'time_related_controls' })(
  connect(mapStateToProps, {setFormData})(AddOrderForm)
);
