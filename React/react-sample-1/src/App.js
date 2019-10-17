import React, { Component } from "react";
import Navi from "./Navi";
import { Container, Row, Col } from "reactstrap";

import Context from "./Context";
export default class App extends Component {
  /*Props ve Encapsulations çalışmalar */
  render() {
    let naviInfo = {
      menu_1: "Oğuzhan KOCABAŞ",
      menu_2: "Hakkında",
      menu_3: "Teknoloji",
      menu_4: ["Blog", "Blog Konu 1", "Blog Konu 2", "Önemli 1"]
    };
    let contextInfo = {
      icerik_1: "Burası içeriklerin ve diğer componentlerin bulunacağı yer"
    };

    return (
      <div>
        {/* props ile calismalar */}
        {/* <Navi ornek ="Bu bir ornek navi yazidir"></Navi> */}
        {/*Props ve Encapsulations çalışmalar */}
        <Navi info={naviInfo}></Navi>
        <Container>
          <Row xs="12">
            <Col xs="12">
              {/* props ile calismalar */}
              {/* <Context ornek = "bu bir Context ornek yazidir."></Context> */}
              {/*Props ve Encapsulations çalışmalar */}
              <Context info={contextInfo}></Context>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
