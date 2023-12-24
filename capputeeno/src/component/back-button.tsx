import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import BackIcon from "./icons/back-icon";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: var(--secondary-text);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
`;

interface BackBtnProps {
  navigate: string;
}

export default function BackBtn({ navigate }: BackBtnProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(navigate);
  };

  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Button>
  );
}
