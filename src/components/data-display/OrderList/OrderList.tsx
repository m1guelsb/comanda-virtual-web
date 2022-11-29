'use client';
/* eslint-disable react/display-name */

import { NoContent } from '@/components/feedback';
import { styled, theme } from '@/styles/stitches.config';
import { Order } from '@/types';
import {
  ComponentProps,
  forwardRef,
  JSXElementConstructor,
  ReactElement,
} from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { OrderCard } from '../OrderCard/OrderCard';

interface OrderListProps extends ComponentProps<typeof OrdersContainer> {
  title: string;
  orderListData: Order[] | undefined;
  providedPlaceholder:
    | ReactElement<HTMLElement, string | JSXElementConstructor<any>>
    | null
    | undefined;
  noContentMessage: string;
}

export const OrderList = forwardRef<HTMLDivElement, OrderListProps>(
  (
    { title, orderListData, noContentMessage, providedPlaceholder, ...props },
    ref
  ) => {
    return (
      <Container>
        <>
          <h2>{title}</h2>

          <OrdersContainer ref={ref} {...props}>
            {orderListData && orderListData.length > 0 ? (
              orderListData?.map((order, index) => (
                <Draggable key={order.id} draggableId={order.id} index={index}>
                  {(provided) => (
                    <OrderCard
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      table={order.table}
                      productsTotal={order.products.length}
                    />
                  )}
                </Draggable>
              ))
            ) : (
              <NoContent message={noContentMessage} />
            )}
            {providedPlaceholder}
          </OrdersContainer>
        </>
      </Container>
    );
  }
);

const Container = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: '0.5rem',

  borderRadius: theme.radii.md,
  padding: '1.25rem',

  backgroundColor: theme.colors.background2,
});

const OrdersContainer = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: '1rem',

  paddingRight: '0.25rem',

  overflow: 'auto',
});
