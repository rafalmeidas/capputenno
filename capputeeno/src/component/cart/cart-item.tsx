"use-client";

import React, { ChangeEvent } from "react";
import styled from "styled-components";

import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import DeleteIcon from "../icons/delete-icon";

interface CartitemProps {
  product: ProductInCart;
  handleUpdateQuantity: (id: string, quantity: number) => void;
  handleDelete: (id: string) => void;
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;
  width: 100%;

  border-radius: 8px;
  background-color: white;
  position: relative;

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 16px;
    right: 20px;
    cursor: pointer;
  }

  img {
    max-height: 100%;
    width: 256px;
    border-radius: 8px 0 0 8px;
  }

  > div {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    padding: 16px 24px;

    line-height: 150%;
    color: var(--text-dark-2);

    h4 {
      font-size: 20px;
      font-weight: 300;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      span {
        color: var(--shapes-dark);
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`;

const SelectQuantity = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1cap.5 solid var(--border-color);
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-size: 16px;
  font-weight: 400;
`;

export default function CartItem({
  product,
  handleUpdateQuantity,
  handleDelete,
}: CartitemProps) {
  const price = formatPrice(product.price_in_cents);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value));
  };

  return (
    <Item>
      <button onClick={() => handleDelete(product.id)} aria-label="Deletar">
        <DeleteIcon />
      </button>
      <img src={product.image_url} alt={product.name} />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <SelectQuantity
            name="quantidade"
            id={`product-${product.id}`}
            value={product.quantity}
            onChange={onChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{price}</span>
        </div>
      </div>
    </Item>
  );
}
