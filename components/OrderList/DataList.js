import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Table, Divider, Tag, Button, Modal} from "antd";
import {loadDataList,delOrderCash} from "../../state/actions/CashAction";
import {dateFormatToThai, mapStatus} from "../../services/Util";

const DataList = ({loadDataList, cash, delOrderCash, handleOpenDetail}) => {
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
          <a href="javascript:;" onClick={()=>handleOpenDetail(record)}>Detail {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>showConfirm(id)}>Delete</a>
        </span>
      )
    }
  ];

  const showConfirm = (id) => {
    Modal.confirm({
      title: 'Do you Want to delete this items?',
      async onOk() {
        await delOrderCash({id});

        console.log('loadDataList');
        
        loadData();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ];

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
  {loadDataList, delOrderCash}
)(DataList);
