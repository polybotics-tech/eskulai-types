export type PaginationMetaType = {
  totalCount: number;
  page: number;
  totalPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

//----DEFAULT CONTENT TEMPLATE----//

export type TextContentType = {
  type: "text";
  variant: "heading" | "body" | "link";
  content: string;
  align?: "left" | "center" | "right";
  url?: string;
  bodyFormat?: "normal" | "bold" | "italic";
  headingLevel?: "h2" | "h3" | "h4";
};

export type ImageContentType = {
  type: "image";
  uri: string;
  caption: string;
  width?: number;
  height?: number;
};

type TableHeadingType = {
  column_id: string;
  title: string;
};
type TableRowType = {
  column_id: string; //--corresponds to heading per column
  entry: { variant: "text" | "link" | "empty"; content: string; uri?: string };
};

export type TableContentType = {
  type: "table";
  caption: string;
  heading: TableHeadingType[];
  body: {
    row: TableRowType[];
  }[];
};

type TableColumnMetaType = {
  maxLength: number;
  width: number;
};

export type TableColumnMetaMapType = Record<string, TableColumnMetaType>;

export type TableColumnWidthEstimatorParams = {
  heading: TableHeadingType[];
  body: { row: TableRowType[] }[];
  maxColumnWidth: number;
  minColumnWidth?: number;
};

export type ListContentType = {
  type: "list";
  variant: "numbered" | "bullet";
  align?: "left" | "right";
  format: "normal" | "italic";
  items: string[];
};

export type SeperatorContentType = {
  type: "seperator";
  isVisible?: boolean;
};

export type DefaultContentListType = (
  | TextContentType
  | ImageContentType
  | TableContentType
  | ListContentType
  | SeperatorContentType
)[];
//----------------------------------//
