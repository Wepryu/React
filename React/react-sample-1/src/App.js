import React from "react";
import Navi from "./Navi";
import { Container, Row, Col } from "reactstrap";

import Context from "./Context";

function App() {
  return (
    <div>
      <Container>
        <Row xs="12">
          <Col xs="12">
            <Navi></Navi>
          </Col>
          <Col xs="12">
            <Context></Context>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
