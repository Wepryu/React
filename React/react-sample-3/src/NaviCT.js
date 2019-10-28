import React, { Component } from "react";
import { Layout, Menu } from 'antd';
const { Header } = Layout;
export default class NaviCT extends Component {
  render() {
    return (
      <div>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Hakkında</Menu.Item>
            <Menu.Item key="2">Teknoloji</Menu.Item>
            <Menu.Item key="3">Blog</Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }
}
