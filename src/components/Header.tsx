import React from 'react';
import {
  Container,
  Navbar,
  FormControl,
  Dropdown,
  Badge,
  Nav,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Navbar.Brand>Shopping Cart</Navbar.Brand>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            About
          </Nav.Link>
        </Nav>

        <Navbar.Text className="search">
          <FormControl style={{ width: 500 }} className="m-auto" />
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge bg="transpalent">10</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ minWidth: 370 }}>
            <span style={{ padding: 10 }}>Cart is empty</span>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
