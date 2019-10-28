import React from "react";
import "./App.css";
import MenuCT from "./Components/MenuCT";
import SubMenuCT from "./Components/SubMenuCT";
import ContentCT from "./Components/ContentCT";
import { Layout } from "antd";
const { Header } = Layout;

const App: React.FC = () => {
  const state = { eventsCalisma: "" };
  
  return (
    <div className="App">
      <Layout>
        <MenuCT></MenuCT>
        <Layout>
          <SubMenuCT></SubMenuCT>
          <ContentCT></ContentCT>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
