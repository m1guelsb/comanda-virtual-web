'use client';
/* eslint-disable react/display-name */

import { styled, theme } from '@/styles/stitches.config';
import { ComponentProps, forwardRef } from 'react';

interface OrderCardProps extends ComponentProps<typeof Container> {
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

const Container = styled('div', {
  minHeight: '10rem',
  maxHeight: '10rem',

  borderRadius: theme.radii.sm,

  _flexGrow: 1,
  _alignCenter: true,
  _flexColumn: true,

  backgroundColor: theme.colors.background3,
  _border: 'All',
  borderColor: theme.colors.primary,
});
