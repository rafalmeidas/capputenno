"use client";

import styled from "styled-components";

import { DefaultPageLayout } from "@/component/default-page-layout";
import ProductsList from "@/component/products-list";
import FilterBar from "@/component/filter-bar";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
