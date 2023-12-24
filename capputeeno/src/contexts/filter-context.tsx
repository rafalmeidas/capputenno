"use client";

import React from "react";
import { FilterTypes } from "@/types/filter-types";
import { createContext, useState, PropsWithChildren } from "react";
import { PriorityTypes } from "@/types/priority-types";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterTypes.ALL,
  priority: PriorityTypes.NEWS,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
  setPriority: (value: PriorityTypes) => {},
});

export default function FilterContextProvider({ children }: PropsWithChildren) {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [type, setType] = useState<FilterTypes>(FilterTypes.ALL);
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setSearch,
        setPage,
        setType,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
