import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./App.css";
import { Table, Divider, Tag } from "antd";
import axios from 'axios'
import { ListCT } from "./ListCT";
import { async } from "q";

const dataSource = [
  {
    key: "1",
    no: "G151210309",
    ad: "Oğuzhan",
    soyad: "Kocabaş",
    gsm: "5076487375",
    eposta: "kocabasoguzhan@gmail.com",
    durum: true,
    createdDate: "2019-10-27T20:28:11.043",
    modifiedDate: "2019-10-28T01:43:52.57"
  },
  {
    key: "1",
    no: "G151210309",
    ad: "Kemal",
    soyad: "Goz",
    gsm: null,
    eposta: null,
    durum: true,
    createdDate: "2019-10-27T23:43:54.22",
    modifiedDate: "2019-10-27T23:43:54.29"
  }
];

const columns = [
  {
    title: "no",
    no: "no",
    key: "no"
  },
  {
    title: "ad",
    dataIndex: "ad",
    key: "ad"
  },
  {
    title: "soyad",
    dataIndex: "soyad",
    key: "soyad"
  },
  {
    title: "gsm",
    dataIndex: "gsm",
    key: "gsm"
  },
  {
    title: "eposta",
    dataIndex: "eposta",
    key: "eposta"
  },
  {
    title: "durum",
    dataIndex: "durum",
    key: "durum"
  },
  {
    title: "createdDate",
    dataIndex: "createdDate",
    key: "createdDate"
  },
  {
    title: "modifiedDate",
    dataIndex: "modifiedDate",
    key: "modifiedDate"
  }
];

interface ListState  {
  time: Date;
  list: [];
};


const App: React.FC = (ListState) => {
  // function TiklandiMi(prm) {
  //   if (prm) {
  //     if (prm == 1) {
  //       //ogrenci

  //     } else if (prm == 2) {
  //       //ders

  //     } else {
  //       //sinif
  //     }
  //   }
  //
 
  return (
    
    <div className="App">
      <ListCT ></ListCT>
      {/* <Table dataSource={dataSource} columns={columns} />;<ListCT></ListCT> */}
    </div>
  );
};

export default App;

// state = { eventsCalisma: "" };
// changeContextField = changes => {
//   this.setState({
//     eventsCalisma: changes.lstId + ". buton elemanına tıklanıldı"
//   });
// };
