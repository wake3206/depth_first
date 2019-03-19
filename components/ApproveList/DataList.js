import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Table, Divider, Tag, Button, Modal} from "antd";
import {loadDataList,delOrderCash, onUpdateStatus} from "../../state/actions/CashAction";
import {dateFormatToThai, mapStatus} from "../../services/Util";

const DataList = ({
  loadDataList, 
  cash, 
  delOrderCash, 
  handleOpenDetail,
  onUpdateStatus
}) => {
  const [loding, setLoading] = useState(true);

  useEffect(() => {
    loadData()
  }, []);

  const loadData = async () => {

    //setLoading(true);
    await loadDataList({status:1});
    //setLoading(false);

  }

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      render:(txt,recd,index) => {
        return <span>{index+1}</span>
      }
    },
    {
      title: "code",
      dataIndex: "code",
      key: "code"
    },
    {
      title: "amount",
      dataIndex: "amount",
      key: "amount"
    },
    {
      title: `description`,
      dataIndex: "description",
      key: "description"
    },
    {
      title: "status",
      key: "status",
      dataIndex: "status",
      render: val => <span>{mapStatus(val)}</span>
    },
    {
      title: "crate date",
      dataIndex: "create_datetime",
      key: "create_datetime",
      render: val => <span>{dateFormatToThai(val)}</span>
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "Action",
      render: (id, record) => (
        <span>
          <a href="javascript:;" onClick={()=>handleApprove(record)}>อนุมัติ </a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>handleInApprove(record)}>ไม่อนุมัติ</a>
        </span>
      )
    }
  ];

  const handleApprove = (model) => {
    Modal.confirm({
      title: 'ยืนยันการอนุมัติรายการ',
      async onOk() {
  
        model.status = 2;
        await onUpdateStatus(model);
        loadData();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const handleInApprove = (model) => {
    Modal.confirm({
      title: 'ยืนยันไม่อนุมัติรายการ',
      async onOk() {
        
        model.status = 3;
        await onUpdateStatus(model);
        loadData();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  


  return (
    <div>
      <Table
        rowKey="id"
        loading={cash.loading}
        style={{marginTop: "10px"}}
        columns={columns}
        dataSource={cash.data}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cash: state.cash
  };
};

export default connect(
  mapStateToProps,
  {loadDataList, delOrderCash, onUpdateStatus}
)(DataList);
