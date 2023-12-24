"use client";

import { useContext } from "react";

import { CartContext } from "@/contexts/cart-context";

export default function useCart() {
  return useContext(CartContext);
}
