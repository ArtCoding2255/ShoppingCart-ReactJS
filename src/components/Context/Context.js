import React, { createContext } from 'react';
import { faker } from '@faker-js/faker';
import { FaLifeRing } from 'react-icons/fa';

const Cart = createContext();

//extract the children property from props
const Context = ({ children }) => {
  const products = [
    ...Array(20).map(() => ({
      id: faker.dataType.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image(),
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
      fastDelivery: faker.dataType.boolean(),
      rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    })),
  ];
  return <Cart.Provider>{children}</Cart.Provider>;
};

export default Context;
