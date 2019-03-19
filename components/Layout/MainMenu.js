import React from "react";
import {Menu, Icon} from "antd";
import Router from 'next/router'

const {SubMenu} = Menu;

const MainMenu = () => {
  const menus = [
    {name: "ตั้งเบิก", icon: "solution", url: "/order_list"},
    {name: "อนุมัติ", icon: "check-circle", url: "/approve"},
    {name: "จ่ายเงิน", icon: "inbox", url: "/"}
  ];

  const goto = (url) => {  
    Router.push(url)
  }

  return (
    <Menu mode="inline" theme="light" style={{borderRight: 0}}>
      {menus.map((i, k) => (
        <Menu.Item key={k} onClick={()=>goto(i.url)}>
          <Icon type={i.icon} />
          <span>{i.name}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MainMenu;
