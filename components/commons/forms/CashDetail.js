import React from "react";
import {Row, Col} from "antd";

const CashDetail = ({model}) => {

  console.log('model', model);
  
  return (
    <div style={{fontSize:'18px'}}>
      <Row>
        <Col span={12} style={{textAlign:'right',padding:'0 10px'}}><label>คำอธิบาย:</label></Col>
        <Col span={12}>{model.description && model.description}</Col>
      </Row>
      <Row>
        <Col span={12} style={{textAlign:'right', padding:'0 10px'}}><label>จำนวน:</label></Col>
        <Col span={12}>{model.amount && model.amount}</Col>
      </Row>
    </div>
  );
};

export default CashDetail;
