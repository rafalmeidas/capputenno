"use client";

import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import FilterContextProvider from "@/contexts/filter-context";
import CartContextProvider from "@/contexts/cart-context";

const theme = {
  desktopBreakpoint: "968px",
  tabletBreakpoint: "768px",
};

export default function DefaultProviders({ children }: PropsWithChildren) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <CartContextProvider>
        <FilterContextProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </FilterContextProvider>
      </CartContextProvider>
    </QueryClientProvider>
  );
}
