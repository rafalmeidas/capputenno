import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import { formatPrice } from "@/utils/format-price";
import { Divider } from "./divider";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  id: string;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0px 0px 4px 4px;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);

  width: 256px;

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    color: var(--text-dark-2);
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
  }

  p {
    color: var(--shapes-dark);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 8px 12px;
    width: 100%;
  }
`;

export default function ProductCard({
  image,
  title,
  price,
  id,
}: ProductCardProps) {
  const router = useRouter();

  const priceFormated = formatPrice(price);

  const handleNavigate = () => {
    router.push(`/product?id=${id}`);
  };

  return (
    <Card onClick={handleNavigate}>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <Divider />
        <p>{priceFormated}</p>
      </div>
    </Card>
  );
}
