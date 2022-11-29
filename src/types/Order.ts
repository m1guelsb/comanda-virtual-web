import { Product } from './Product';

export interface Order {
  id: string;
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  products: [product: Product];
}
