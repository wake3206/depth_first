import React, {useState} from "react";
import { connect } from "react-redux";
import {Card} from "antd";
import MainBreadcrumb from "../Layout/MainBreadcrumb";
import FormSearch from "../commons/forms/FormSearch";
import DataList from "./DataList";
import MainModal from "../commons/MainModal";
import CashDetail from "../commons/forms/CashDetail";
import { loadDataList } from "../../state/actions/CashAction";


const ApproveList = ({loadDataList}) => {
  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [selModel, setSelModel] = useState({});

  const handleCancel = () => {
    setOpen(!open);
    loadDataList();
  };

  const handleCloseDetail= () => {
    setOpenDetail(!open);
  };

  const handleOpenDetail = (model) => {
    setOpenDetail(true)
    setSelModel(model)
  }

  const optStatus = [
    {txt:"ขออนุมัติ",value:"1"},
    {txt:"อนุมัติแล้ว",value:"2"},
    {txt:"ไม่อนุมัติ",value:"3"},
    {txt:"ยกเลิก",value:"4"},
    {txt:"สําเร็จแล้ว",value:"5"}
  ]


  return (
    <>
      <MainBreadcrumb />
      <Card title="รายการรออนุมัติ" bordered={false}>
        <FormSearch optStatus={optStatus} />
        <DataList handleOpenDetail={handleOpenDetail} />
        <MainModal
          title="Detail."
          open={openDetail}
          handleCancel={()=>setOpenDetail(false)} >

          <CashDetail model={selModel} handleCancel={handleCloseDetail} />
        </MainModal>

      </Card>
    </>
  );
};

export default connect(null, {loadDataList})(ApproveList);
