import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Sider } = Layout;

export default class SubMenuCT extends Component {
  render() {
    return (
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="aliwangwang" theme="filled"/>
                Öğrenci
              </span>
            }
          >
            <Menu.Item key="1">Listele</Menu.Item>
            <Menu.Item key="2">Bilgi Girişi</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="book" theme="filled"/>
                Ders
              </span>
            }
          >
            <Menu.Item key="5">Listele</Menu.Item>
            <Menu.Item key="6">Bilgi Girişi</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="home"  theme="filled"/>
                Sınıf
              </span>
            }
          >
            <Menu.Item key="9">Listele</Menu.Item>
            <Menu.Item key="10">Bilgi Girişi</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
