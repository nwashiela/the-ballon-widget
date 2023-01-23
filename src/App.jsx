import { useState, React } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Container,
  Form,
  Col,
  Row,
  Card,
} from "react-bootstrap";

export default function App() {
  const initialList = [];
  
  // const [list, setList] = useState(initialList);
  const [baloon, setBaloon] = useState("");
  // const [winner, setWinner] = useState("");
  // const [counter, setCounter] = useState(0);
  const [displayBool, setDisplayBool] = useState(false);
  const [balloons, setBalloons] = useState([  ]);
  

  if (balloons.length != 0) {
    setTimeout(() => setDisplayBool(!displayBool), 5000);
  }

  function handleChange(event) {
    setBaloon(event.target.value);
  }

  function handleAdd() {
    const value = baloon;

    const result = balloons.find((item) => item.color === value);
    if (!result) {
      setBalloons([
        ...balloons,
        {
          count: 1,
          color: value,
        },
      ]);
    } else {
      setBalloons([
        ...balloons.filter((item) => item.color !== value),
        {
          ...result,
          count: result.count + 1,
        },
      ]);
    }
  }

  return (
    <>
      <Navbar className="nav">
        <Container className="header">
          <Navbar.Brand style={{ color: "white" }}>
            {" "}
            Ballon Expects{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container
        className="display-state"
        style={{ display: displayBool ? "flex" : "none" }}
      >
        {balloons.length > 0 && <h2>{balloons[0].color} colour won</h2>}
      </Container>

      <div>
        <Row>
          <Col>
            <Card>
              <Form>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <Form.Control
                        placeholder="Type Colour"
                        type="text"
                        value={baloon}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm="4">
                      <Button
                        variant="secondary"
                        type="button"
                        onClick={handleAdd}
                      >
                        add
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>

              <hr
                style={{
                  background: "white",
                  height: "3px",
                }}
              />

              {balloons.map((item, index) => (
                <>
                  <div className="flexdiv">
                    <Button
                      key={index}
                      //add colour to buttons using style attribute
                      style={{
                        backgroundColor: item.color,
                        width: 250,
                        color: item.color == "yellow" ? "black" : "white",
                      }}
                      onClick={() => increase()}
                    >
                      {item.color} {item.count}
                    </Button>
                    <Button variant="secondary" onClick={() => handleAdd()}>
                      <span>Buy</span>
                    </Button>
                  </div>
                </>
              ))}
            </Card>
          </Col>

          <Col>
            <Card>
              <Row className="sections">
                <Col>
                  <Card>
                    <h4> Upcoming</h4>
                    <hr />
                    {balloons
                      .filter((item) => item.count >= 3 && item.count <= 4)
                      .sort((a, b) => a.count - b.count)
                      .map((item, index) => (
                        <p
                          key={index}
                          style={{ color: item.color }}
                          count={item.count}
                        >
                          {item.color}
                        </p>
                      ))}
                    {/* {list.map((item, index) => (
                      <>
                        <p key={index} style={{ backgroundColor: item.baloon }}>
                          {item.baloon}
                        </p>
                      </>
                    ))} */}
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <h4>Trending</h4>
                    <hr />
                    {balloons
                      .filter((item) => item.count >= 11)
                      .sort((a, b) => a.count - b.count)
                      .slice(0, 3)
                      .map((item, index) => (
                        <p
                          key={index}
                          style={{ color: item.color }}
                          count={item.count}
                        >
                          {item.color}
                        </p>
                      ))}
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <h4>Popular</h4>
                    <hr />
                    {balloons
                      .filter((item) => item.count >= 5 && item.count <= 10)
                      .sort((a, b) => a.count - b.count)
                      .map((item, index) => (
                        <p
                          key={index}
                          style={{ color: item.color }}
                          count={item.count}
                        >
                          {item.color}
                        </p>
                      ))}
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
