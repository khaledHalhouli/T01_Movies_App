import React from "react";
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button,Offcanvas} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars =()=>{



    return <>
  {['lg'].map((expand) => (
    
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">PopCorn</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favorite">Favorite</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</>
}
export default Navbars