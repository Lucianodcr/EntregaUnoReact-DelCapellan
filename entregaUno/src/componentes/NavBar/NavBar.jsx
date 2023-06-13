import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Muelcof</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Fragancias Femeninas</Nav.Link>
          <Nav.Link href="#pricing">Fragrancias Masculinas</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
  );
};

export default NavBar;
