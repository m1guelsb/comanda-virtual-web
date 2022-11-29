'use client';

import { forwardRef } from 'react';
import { Container, Props } from './order-card.styles';

interface OrderCardProps extends Props {
  table: string;
  productsTotal: number;
}

export const OrderCard = forwardRef<HTMLDivElement, OrderCardProps>(
  ({ table, productsTotal, ...props }, ref) => {
    return (
      <Container ref={ref} {...props}>
        <p>Mesa: {table}</p>
        <p>Itens: {productsTotal}</p>
      </Container>
    );
  }
);
OrderCard.displayName = 'OrderCard';
