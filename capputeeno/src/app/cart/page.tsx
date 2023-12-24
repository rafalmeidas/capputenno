"use client";

import React from "react";
import styled from "styled-components";

import { DefaultPageLayout } from "@/component/default-page-layout";
import { formatPrice } from "@/utils/format-price";
import CartItem from "@/component/cart/cart-item";
import { ProductInCart } from "@/types/product";
import BackBtn from "@/component/back-button";
import { Divider } from "@/component/divider";
import useCart from "@/hooks/useCart";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`;

const CartListContainer = styled.div`
  h3 {
    color: var(--text-dark-2);
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 150%;
    margin-top: 24px;
  }

  p {
    color: var(--text-dark-2);
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;

    span {
      font-weight: 600;
      line-height: 150%;
    }
  }
`;

const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 352px;
  padding: 16px 24px;

  background-color: white;

  h3 {
    color: var(--text-dark-2);
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;

const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-weight: ${(props) => (props.isBold ? "600" : "400")};
  color: var(--text-dark-2);
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 12px;
`;

const ShopBtn = styled.button`
  color: white;
  border-radius: 4px;
  background-color: var(--success-color);
  padding: 12px;
  width: 100%;
  border: none;
  margin-top: 40px;
  cursor: pointer;

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-transform: uppercase;
`;

export default function CartPage() {
  const { cart, updateCart } = useCart();

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, current) => (sum += current.price_in_cents * current.quantity),
      0
    );
  };

  const cartTotal = formatPrice(calculateTotal(cart));
  const deliveryFee = 4000;
  const cartTotalWithDelivery = formatPrice(calculateTotal(cart) + deliveryFee);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = cart.map((item) => {
      if (item.id !== id) return item;

      return { ...item, quantity };
    });

    updateCart(newValue);
  };

  const handleDelete = (id: string) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackBtn navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total {cart.length} {cart.length === 1 ? "produto " : "produtos "}
            <span>{cartTotal}</span>
          </p>

          <CartList>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleDelete}
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do Pedido</h3>

          <TotalItem isBold={false}>
            <p>Subtotal de produtos</p>
            <p>{cartTotal}</p>
          </TotalItem>
          <TotalItem isBold={false}>
            <p>Entrega</p>
            <p>{formatPrice(deliveryFee)}</p>
          </TotalItem>

          <Divider />

          <TotalItem isBold>
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </TotalItem>
          <ShopBtn>Finalizar Compra</ShopBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  );
}
