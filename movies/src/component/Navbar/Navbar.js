import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Navbars = ({ setSearch }) => {
  const [inputSearch, setInputSearch] = useState("")
  const searchBut = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=eb9e888f1f8bec115837636c39456418&language=en-US&query=${inputSearch}`
      )
      .then((result) => {
        console.log(result.data.results);
        setSearch(result.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {["lg"].map((expand) => (
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
                <Form className="d-flex" onSubmit={searchBut}>
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>{
                      setInputSearch(e.target.value);
                    }}
                  />
                  <Link to={"/search"}>

                  <Button
                    variant="outline-success"
                    onClick={(e) => {
                      
                      searchBut();
                    }}
                    >
                    Search
                  </Button>
                    </Link>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
export default Navbars;
