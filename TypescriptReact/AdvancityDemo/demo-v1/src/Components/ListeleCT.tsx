import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Divider, Tag } from 'antd';
const dataSource=[{}];
const columns = [{}];

  export default class ListeleCT extends Component {
    render() {
      return (
        <Table dataSource={dataSource} columns={columns} />

      );
    }
  }
  