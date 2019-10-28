import React, { Component } from "react";
import { Layout } from 'antd';
const { Footer } = Layout;
export default class FooterCT extends Component {
  render() {
    return (
      <div>
        <Footer style={{ textAlign: "center" }}>
          Oğuzhan KOCABAŞ ©2019 Created by KOCABAŞ
        </Footer>
      </div>
    );
  }
}
