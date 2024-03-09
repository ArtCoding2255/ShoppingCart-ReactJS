import { createContext, useContext, useState } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import { useLocalStorage } from '../hooks/useLocalStorage';

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  );
  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0); //reduce has 2 agruments, the first is a function that takes 2 arguments, the first is the accumulator and the second is the current item, the second argument is the initial value of the accumulator

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    return setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id: id, quantity: 1 }]; // Add new item to cart
      } else {
        //increase quantity of existing item
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return { ...item };
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    return setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id); // Add new item to cart
      } else {
        //increase quantity of existing item
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    return setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        decreaseCartQuantity,
        increaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        closeCart,
        openCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isCartOpen} />
    </ShoppingCartContext.Provider>
  );
}
