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

  const [list, setList] = useState(initialList);
  const [baloon, setBaloon] = useState("");
  const [counter, setCounter] = useState(0);

  function handleChange(event) {
    setBaloon(event.target.value);
  }

  function handleAdd() {

    let newList = list.concat({ baloon, counter: 0 });
  
    console.log(newList)
    setList(newList);
  }
  // increase counter
  // function increase(id) {
  //   baloon[index].qty++;
  //   setBaloon([...baloon])
  //   setCounter(counter + 1);
  //   console.log(counter)
  // }
  // const increase = (index) => {
  //   baloon[index];
  //   setBaloon([...baloon]);
  //   setCounter(counter + 1);
  //   console.log(counter)
  // };
  const increase = (index) => {
    baloon[index];
    setBaloon([...baloon])
    setCounter(counter + 1);
    console.log(index)
    console.log([index].counter)
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> Ballon Expects </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <h2>fcgvhjbjknk</h2>
      </Container>

      <div Container="grid">
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
                  background: "lime",
                  height: "3px",
                }}
              />
            
            {list.map((item, index) => (
                    <Button
                      key={index}
                      //add colour to buttons using style attribute
                      style={{ backgroundColor: item.baloon }}
                      onClick={() => increase(index)}

                    >
                      {item.baloon} {counter}   
                    </Button>
                  ))}
                <Button variant="secondary" >
                    <span>Buy</span>
                  </Button>
             
            </Card>
          </Col>

          <Col>
            <Card>
              <Row>
                <Col>
                  <Card>Popular</Card>
                </Col>
                <Col>
                  <Card>Trending</Card>
                </Col>
                <Col>
                  <Card>Upcoming</Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
