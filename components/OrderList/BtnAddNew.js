import React from 'react';
import {Button} from "antd";

const BtnAddNew = ({setOpen}) => {
  return (
    <Button
          onClick={() => setOpen(true)}
          type="primary"
          icon="plus"
          size={"default"}
        >เพิ่มรายการ</Button>
  );
};

export default BtnAddNew;