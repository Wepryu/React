import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Layout, Breadcrumb } from "antd";
import { whileStatement } from "@babel/types";
import ListeleCT from "./ListeleCT";


const { Content } = Layout;
export default class ContentCT extends Component {
  render() {
    return (
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <ListeleCT></ListeleCT>
        </Content>
      </Layout>
    );
  }
}
