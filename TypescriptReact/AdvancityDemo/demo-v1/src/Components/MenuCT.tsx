import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { whileStatement } from "@babel/types";
const { Header } = Layout;

export default class MenuCT extends Component {
  render() {
    return (
      <Header className="header">
        <h2 style={{ color: "#fff" }}>Advancity Typescript React Demo V1</h2>
      </Header>
    );
  }
}
