import { Button, Col, Container, Nav, Row } from "react-bootstrap";



export default function Home() {
  return (
    <main className="main">
<Container fluid className="d-flex flex-column home_container">
        <Row>
          <Nav className="justify-content-around home_navbar" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Features</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Documentation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Contributing</Nav.Link>
        </Nav.Item>
      </Nav>
      </Row>
      

      <Row className="align-items-center h-100 text-center">
        <Col sm={2} className=" d-flex flex-column  home_discussion">
        <img
            src="/element.svg"
            alt="The logo of element"
          />
          <img
            src="/discord.svg"
            alt="The logo of discord"
          />
          <img
            src="/github.svg"
            alt="The logo of github"
          />
        </Col>
        <Col sm={8} >
 
          <img
            src="/logo.svg"
            alt="The logo of BlenderCam"
            className="home_logo"
          />
          <p className="home_logo_sentence">
            Free and open-source solution for Computer Aided Manufacturing with
            Blender3D
          </p>
        </Col>
        <Col sm={2}></Col>
      </Row>
      <Row className="justify-content-around">
        <div className="home_started_button text-center"><Button className="btn-outline-blender" >Get Started</Button></div>

      </Row>
</Container>
    </main>
  );
}
