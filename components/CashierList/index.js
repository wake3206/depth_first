import React, {useState} from "react";
import { connect } from "react-redux";
import {Card} from "antd";
import MainBreadcrumb from "../Layout/MainBreadcrumb";
import FormSearch from "../commons/forms/FormSearch";
import DataList from "./DataList";
import MainModal from "../commons/MainModal";
import CashDetail from "../commons/forms/CashDetail";
import { loadDataList } from "../../state/actions/CashAction";


const CashierList = ({loadDataList}) => {
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
    
    {txt:"อนุมัติแล้ว",value:"2"},
    {txt:"สําเร็จแล้ว",value:"5"}
  ]


  return (
    <>
      <MainBreadcrumb />
      <Card title="รายการรอจ่ายเงิน" bordered={false}>
        <FormSearch optStatus={optStatus} iniStatus={"2"} />
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

export default connect(null, {loadDataList})(CashierList);
