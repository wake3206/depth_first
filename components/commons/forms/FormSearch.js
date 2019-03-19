import React from "react";
import {Form, Row, Col, Input, Button, Icon, Select} from "antd";
import {connect} from "react-redux";
import {loadDataList, loadFormSearch} from "../../../state/actions/CashAction";

const FormSearch = ({form, loadDataList, loadFormSearch, optStatus , iniStatus}) => {

  const handleReset = () => {
    form.resetFields();
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields( async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        loadFormSearch(values);
        await loadDataList();
      }
    });
  };

  const {getFieldDecorator} = form;

  return (
    <div>
      <Form className="ant-advanced-search-form" onSubmit={handleSubmit}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label={`code`}>
              {getFieldDecorator(`code`, {
                rules: [
                  {
                    required: false,
                    message: "Input something!"
                  }
                ]
              })(<Input placeholder="type code" />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={`status`}>
              {getFieldDecorator(`status`, {
                rules: [
                  {
                    required: false,
                    message: "Input something!"
                  }
                ],
                initialValue:(iniStatus !== undefined) ? iniStatus:"1"
              })(
                <Select 
                  placeholder="Select a status">
                  {
                    optStatus.map((i,k) => {
                      return <Select.Option key={k} value={i.value}>{i.txt}</Select.Option>
                    })
                  }
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8} style={{paddingTop: "4px"}}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={{marginLeft: 8}} onClick={handleReset}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Form.create({name: "advanced_search"})(
  connect(
    null,
    {loadDataList, loadFormSearch}
  )(FormSearch)
);
