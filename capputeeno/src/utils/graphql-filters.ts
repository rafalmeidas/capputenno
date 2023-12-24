import { PriorityTypes } from "@/types/priority-types";
import { FilterTypes } from "@/types/filter-types";

export const getCategoryByType = (type: FilterTypes) => {
  switch (type) {
    case FilterTypes.MUG:
      return "mugs";
    case FilterTypes.SHIRT:
      return "t-shirts";
    default:
      return "";
  }
};

export const getFieldByPriority = (priority: PriorityTypes) => {
  switch (priority) {
    case PriorityTypes.NEWS:
      return { field: "created_at", order: "ASC" };
    case PriorityTypes.MINOR_PRICE:
      return { field: "price_in_cents", order: "ASC" };
    case PriorityTypes.BIGGEST_PRICE:
      return { field: "price_in_cents", order: "DSC" };
    default:
      return { field: "sales", order: "DSC" };
  }
};

export const mountQuery = (type: FilterTypes, priority: PriorityTypes) => {
  if (type === FilterTypes.ALL && priority === PriorityTypes.POPULARITY)
    return `
      query {
        allProducts(sortField: "sales", sortOrder: "DSC") {
          id
          name
          price_in_cents
          category
          image_url
        }
      }
    `;

  const { field, order } = getFieldByPriority(priority);
  const categoryFilter = getCategoryByType(type);

  return `
    query {
      allProducts (sortField: "${field}", sortOrder: "${order}", ${
    categoryFilter ? `filter: {category: "${categoryFilter}"}` : ""
  }) {
        id
        name
        price_in_cents
        category
        image_url
      }
    }
  `;
};
