import React from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import { format } from 'path';
import { formatCurrency } from '../utilities/formatCurrency';
import storeItem from '../data/items.json';

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              quantity={item.quantity}
            ></CartItem>
          ))}
        </Stack>
        <div className="me-auto fw-bold fs-5">
          Total:{' '}
          {formatCurrency(
            cartItems.reduce((acc, cartItem) => {
              const item = storeItem.find((i) => i.id === cartItem.id);
              return acc + (item?.price || 0) * cartItem.quantity; //use chaining operator to handle if item is null
              // || or operator, if the first operand is falsy, it returns the second operand
            }, 0)
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
