"use client";

import React from "react";

import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./product-card";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  gap: 32px;
  max-width: 100%;

  margin-top: 32px;
`;

export default function ProductsList() {
  const { data } = useProducts();

  return (
    <ListContainer>
      {data.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image_url}
          title={product.name}
          price={product.price_in_cents}
          id={product.id}
        />
      ))}
    </ListContainer>
  );
}
