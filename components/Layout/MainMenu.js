import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {Menu, Icon} from "antd";
import Router from 'next/router'
import { loadMenu } from "../../state/actions/CashAction";

const {SubMenu} = Menu;

const MainMenu = ({loadMenu}) => {
  // const menus = [
  //   {name: "ตั้งเบิก", icon: "solution", url: "/order_list"},
  //   {name: "อนุมัติ", icon: "check-circle", url: "/approve"},
  //   {name: "จ่ายเงิน", icon: "inbox", url: "/cashier"}
  // ];

  const [menus, setMenu] = useState([])

  useEffect(()=>{
    onLoadMenu();
  },[])

  const onLoadMenu = async () => {

    let res = await loadMenu({});
    setMenu(res)
  }

  const goto = (url) => {  
    Router.push(url)
  }

  return (
    <Menu mode="inline" theme="light" style={{borderRight: 0}}>
      {menus && menus.map((i, k) => (
        <Menu.Item key={k} onClick={()=>goto(i.url)}>
          <Icon type={i.icon} />
          <span>{i.name}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default connect(null,{loadMenu})(MainMenu);
