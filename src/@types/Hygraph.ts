export interface ConnectionPattern {
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageSize: number;
  };
  aggregate: {
    count: number;
  };
}
