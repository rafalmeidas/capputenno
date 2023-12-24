import React, { useState } from "react";
import styled from "styled-components";

import { PriorityTypes } from "@/types/priority-types";
import ArrowIcon from "./icons/arrow-icon";
import useFilter from "@/hooks/useFilter";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background-color: transparent;

    svg {
      margin-left: 16px;
    }
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  padding: 12px 16px;
  width: 250px;
  border-radius: 4px;
  background: var(--shapes-01, #fff);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  list-style: none;
  z-index: 999;

  top: 100%;
  right: 8px;

  li {
    color: var(--text-dark);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

export default function FilterByPriority() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setPriority } = useFilter();

  const handleOpen = () => setIsOpen(!isOpen);

  const handleFilter = (priority: PriorityTypes) => {
    setPriority(priority);
    setIsOpen(false);
  };

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por <ArrowIcon />
      </button>
      {isOpen ? (
        <PriorityFilter>
          <li onClick={() => handleFilter(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleFilter(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleFilter(PriorityTypes.MINOR_PRICE)}>
            Preço Menor - maior
          </li>
          <li onClick={() => handleFilter(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      ) : null}
    </FilterContainer>
  );
}
