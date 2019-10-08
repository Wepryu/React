import React from "react";
import Navi from "./Navi";
import { Container, Row, Col } from "reactstrap";

import Context from "./Context";

function App() {
  return (
    <div>
      {/* props ile calismalar */}
      <Navi ornek ="Bu bir ornek navi yazidir"></Navi>
      <Container>
        <Row xs="12">
          <Col xs="12">
            {/* props ile calismalar */}
            <Context ornek = "bu bir Context ornek yazidir."></Context>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
