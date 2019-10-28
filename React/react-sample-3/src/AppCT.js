import React from "react";
import NaviCT from "./NaviCT";
import ContentCT from "./ContentCT";
import FooterCT from "./FooterCT";
import { Layout, Button,Affix } from "antd";

const { Content } = Layout;
function App() {
  return (
    <Content>
      <div
        className="scrollable-container"
        ref={node => {
          container = node;
        }}
      >
        <div className="background">
          <Affix target={() => container}>
            <Button type="primary">Fixed at the top of container</Button>
          </Affix>
        </div>
      </div>
      <NaviCT></NaviCT>
      <ContentCT></ContentCT>
      <FooterCT></FooterCT>
    </Content>
  );
}

export default App;
