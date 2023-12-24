"use client";

import React from "react";
import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";

import { PrimaryInputSearchIcon } from "./primary-input";
import CartControl from "./cart/cart-control";
import useFilter from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["vietnamese"],
});

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.tabletBreakpoint}) {
    font-size: 24pxpx;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`;

export default function Header() {
  const { setSearch, search } = useFilter();

  return (
    <TagHeader>
      <Logo className={sairaStencil.className} href="/">
        Capputeeno
      </Logo>
      <div>
        <PrimaryInputSearchIcon
          handleChange={setSearch}
          value={search}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}
