'use client';

import { forwardRef, JSXElementConstructor, ReactElement } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { NoContent } from '@/components/feedback';
import { OrderCard } from '@/components/data-display';
import { Order } from '@/types';
import { Container, OrdersContainer, Props } from './order-list.styles';

interface OrderListProps extends Props {
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
      <Container {...props}>
        <>
          <h2>{title}</h2>

          <OrdersContainer ref={ref}>
            {orderListData && orderListData.length > 0 ? (
              orderListData?.map((order, index) => (
                <Draggable key={order.id} draggableId={order.id} index={index}>
                  {(provided, snapshot) => (
                    <OrderCard
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      table={order.table}
                      productsTotal={order.products.length}
                      css={{
                        background: snapshot.isDragging
                          ? 'rgba( 255, 255, 255, 0.4 )'
                          : 'rgba( 255, 255, 255, 0.4 )',
                        boxShadow: snapshot.isDragging
                          ? `0 5px 8px 0 rgba( 0,0, 0, 0.05)`
                          : ``,
                        backdropFilter: snapshot.isDragging
                          ? 'blur( 2px )'
                          : '',
                      }}
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
OrderList.displayName = 'OrderList';
