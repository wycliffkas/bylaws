import { Alert, Col, Row } from "react-bootstrap";
import Content from "./components/Content";
import TableContents from "./pages/TableContents";

function App() {
  return (
    <div className="container mt-4">
      <Row>
        <Col>
          <Alert variant="info">
            This is the latest version of this By-law.
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col className="table-contents">
          <TableContents />
        </Col>
        <Col className="content">
          <Content />
        </Col>
      </Row>
    </div>
  );
}

export default App;
