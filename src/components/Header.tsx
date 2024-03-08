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
import { useShoppingCart } from '../context/ShoppingCartContext';

const Header = () => {
  const { openCart, cartQuantity } = useShoppingCart();
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
        <Dropdown onClick={openCart}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart color="white" fontSize="25px" />
            {cartQuantity === 0 ? null : (
              <Badge bg="transpalent">{cartQuantity}</Badge>
            )}
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
