import React from "react";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";

import CartIcon from "../icons/cart-icon";
import useCart from "@/hooks/useCart";

const CartCount = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  padding: 2px 5px;
  font-size: 10px;

  background-color: var(--delete-color);
  color: white;

  margin-left: -10px;
`;

const Container = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export default function CartControl() {
  const router = useRouter();
  const { cart } = useCart();

  const handleNavigateToCart = () => {
    router.push("/cart");
  };

  return (
    <Container onClick={handleNavigateToCart}>
      <CartIcon />
      {cart.length > 0 ? <CartCount>{cart.length}</CartCount> : null}
    </Container>
  );
}
