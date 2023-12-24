"use client";

import React from "react";
import styled from "styled-components";

import { DefaultPageLayout } from "@/component/default-page-layout";
import ShoppingBagIcon from "@/component/icons/shopping-bag-icon";
import { formatPrice } from "@/utils/format-price";
import { useProduct } from "@/hooks/useProduct";
import { ProductInCart } from "@/types/product";
import BackBtn from "@/component/back-button";
import useCart from "@/hooks/useCart";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;
    margin-top: 24px;

    img {
      max-width: 640px;
      width: 50%;
    }

    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      button {
        border-radius: 4px;
        background: #115d8c;
        mix-blend-mode: multiply;
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px 0;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
    }
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 12px;
  }

  span:nth-of-type(2) {
    color: var(--shapes-dark);
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 24px;
  }

  p {
    color: var(--textos-dark-2);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
  }

  div {
    margin-top: 58px;

    h3 {
      color: var(--textos-dark);
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      text-transform: uppercase;
    }

    p {
      color: var(--textos-dark-2);
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
    }
  }
`;

export default function Product({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data } = useProduct(searchParams?.id);
  const { cart, updateCart } = useCart();

  const handleAddToCard = () => {
    let cartItems = cart;

    if (cartItems) {
      let cartItemsArray: ProductInCart[] = cartItems;

      let existingProductIndex = cartItemsArray.findIndex(
        (item) => item.id === searchParams.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...data!, id: searchParams.id, quantity: 1 });
      }

      updateCart(cartItemsArray);
    } else {
      const newCart: ProductInCart[] = [
        { ...data!, id: searchParams.id, quantity: 1 },
      ];
      updateCart(newCart);
    }
  };

  return (
    <DefaultPageLayout>
      <Container>
        <BackBtn navigate="/" />
        <section>
          <img src={data?.image_url} alt={data?.name} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button onClick={handleAddToCard}>
              <ShoppingBagIcon />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  );
}
