import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Table, Divider, Tag } from 'antd';

const dataSource = [
  {
    key: '1',
    no: 'G151210309',
    ad: 'Oğuzhan',
    soyad: 'Kocabaş',
    gsm: '5076487375',
    eposta: 'kocabasoguzhan@gmail.com',
    durum: true,
    createdDate: "2019-10-27T20:28:11.043",
    modifiedDate: "2019-10-28T01:43:52.57",
  },
  {
    key: '1',
    no: 'G151210309',
    ad: 'Kemal',
    soyad: 'Goz',
    gsm: null,
    eposta: null,
    durum: true,
    createdDate: "2019-10-27T23:43:54.22",
    modifiedDate: "2019-10-27T23:43:54.29",
  },
];


const columns = [
  {
    title: 'no',
    no: 'no',
    key: 'no',
  },
  {
    title: 'ad',
    dataIndex: 'ad',
    key: 'ad',
  },
  {
    title: 'soyad',
    dataIndex: 'soyad',
    key: 'soyad',
  },
  {
    title: 'gsm',
    dataIndex: 'gsm',
    key: 'gsm',
  },
  {
    title: 'eposta',
    dataIndex: 'eposta',
    key: 'eposta',
  },
  {
    title: 'durum',
    dataIndex: 'durum',
    key: 'durum',
  },
  {
    title: 'createdDate',
    dataIndex: 'createdDate',
    key: 'createdDate',
  },
  {
    title: 'modifiedDate',
    dataIndex: 'modifiedDate',
    key: 'modifiedDate',
  },
];


const App: React.FC = () => {
  
  return (
    <div className="App">
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default App;
