import React from "react";

import { FilterTypes } from "@/types/filter-types";
import useFilter from "@/hooks/useFilter";

import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--textos-dark);

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : "none"};

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export default function FilterByType() {
  const { type, setType } = useFilter();

  function onClick(type: FilterTypes) {
    setType(type);
  }

  function isSelected(isType: FilterTypes): boolean {
    return type === isType;
  }

  return (
    <FilterList>
      <FilterItem
        selected={isSelected(FilterTypes.ALL)}
        onClick={() => onClick(FilterTypes.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={isSelected(FilterTypes.SHIRT)}
        onClick={() => onClick(FilterTypes.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={isSelected(FilterTypes.MUG)}
        onClick={() => onClick(FilterTypes.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
}
