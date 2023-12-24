import { KeyLocalStorage } from "@/enums/key-local-storage";
import { ProductInCart } from "@/types/product";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";

export const CartContext = createContext({
  cart: [] as ProductInCart[],
  updateCart: (newCartItems: ProductInCart[]) => {},
});

export default function CartContextProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<ProductInCart[]>([]);

  const updateCart = useCallback((newCartItems: ProductInCart[]) => {
    setCart(() => [...newCartItems]);
    localStorage.setItem(
      KeyLocalStorage.CART_ITEMS,
      JSON.stringify(newCartItems)
    );
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const value = localStorage.getItem(KeyLocalStorage.CART_ITEMS);
    if (value) setCart(JSON.parse(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window]);

  const value = useMemo(() => ({ cart, updateCart }), [updateCart, cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
