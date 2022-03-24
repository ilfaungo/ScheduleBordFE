import React from "react";
import ChartistGraph from "react-chartist";
import objdata from "../mock.js"
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  OverlayTrigger,
  Table,
  Tooltip,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>


        <Row>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Statistics</Card.Title>

              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  className="ct-perfect-fourth"
                  data={{
                    labels: ["40%", "20%", "40%"],
                    series: [40, 20, 40],
                  }}
                  type="Pie"
                />
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle mr-1 text-info"></i>
                  Open <i className="fas fa-circle mr-1 text-danger"></i>
                  Bounce <i className="fas fa-circle mr-1 text-warning"></i>
                  Unsubscribe
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o"></i>
                  Campaign sent 2 days ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Tasks</Card.Title>
                <p className="card-category">Backend development</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      {objdata.map((val, key) => {
                        <tr>
                          <td>
                            Lines From Great Russian Literature? Or E-mails From
                            My Boss?
                          </td>
                        </tr>
                      })}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Dashboard;
