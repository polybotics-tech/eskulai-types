export type PaginationMetaType = {
  totalCount: number;
  page: number;
  totalPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type DropDownOptionType = {
  name?: string;
  value: string | null;
  icon?: string;
  subText?: string;
  description?: string;
  group?: string;
};
