import { Product } from './Product';

export interface Order {
  id: string;
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  products: [product: Product];
}

export type tOrderState = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

export type tColumn = {
  title: string;
  items: Order[] | undefined;
  noContent: string;
};

export type tOrdersColumns = {
  [columnId in tOrderState]: tColumn;
};
