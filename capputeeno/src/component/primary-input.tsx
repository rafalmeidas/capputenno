import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

import Searchicon from "./icons/search-icon";

export const PrymaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  background-color: var(--bg-secondary);

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  color: var(--text-dark);

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 250px;

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    width: 352px;
  }
`;

interface PrimaryInputSearchIconProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInputSearchIcon({
  handleChange,
  value,
  ...rest
}: PrimaryInputSearchIconProps) {
  return (
    <InputContainer>
      <PrymaryInput
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        {...rest}
      />
      <Searchicon />
    </InputContainer>
  );
}
