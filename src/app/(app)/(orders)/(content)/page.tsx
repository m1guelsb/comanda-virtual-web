'use client';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { OrderList } from '@/components/data-display';
import { styled } from '@/styles/stitches.config';
import { useListOrder } from '@/hooks/api/orders';
import { useStrictDroppable } from '@/hooks/useStrictDroppable';
import { useEffect, useState } from 'react';
import { Order } from '@/types';

// async function getOrders(): Promise<Order[]> {
//   try {
//     const data = await fetch(`${process.env.API_URL}/orders`, {
//       cache: 'no-store',
//     }).then((res) => res.json());

//     return data;
//   } catch (error) {
//     throw new Error('Failed to fetch');
//   }
// }

type tOrderState = 'WAITING' | 'IN_PRODUCTION' | 'DONE';
type tColumn = {
  title: string;
  items: Order[] | undefined;
  noContent: string;
};
type tOrdersColumns = {
  [columnId in tOrderState]: tColumn;
};

export default function Orders() {
  // const orderList = await getOrders();
  const { orderList, isLoading } = useListOrder();
  const [enabled] = useStrictDroppable(isLoading);

  const [ordersColumns, setOrdersColumns] = useState<tOrdersColumns>();

  useEffect(() => {
    setOrdersColumns({
      ['WAITING']: {
        title: 'Em espera',
        items: orderList?.filter((order) => order.status === 'WAITING'),
        noContent: 'Não há produtos em espera',
      },
      ['IN_PRODUCTION']: {
        title: 'Em produção',
        items: orderList?.filter((order) => order.status === 'IN_PRODUCTION'),
        noContent: 'Não há produtos em produção',
      },
      ['DONE']: {
        title: 'Finalizado',
        items: orderList?.filter((order) => order.status === 'DONE'),
        noContent: 'Não há produtos finalizados',
      },
    });
  }, [orderList]);

  const [columns, setColumns] = useState<tOrdersColumns | undefined>();
  useEffect(() => {
    setColumns(ordersColumns);
  }, [ordersColumns]);

  console.log('columns', columns);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (!columns) return;
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = columns[source.droppableId as tOrderState];
          const destColumn = columns[destination.droppableId as tOrderState];
          const sourceItems = [...(sourceColumn.items ?? [])];
          const destItems = [...(destColumn.items ?? [])];
          const [removed] = sourceItems.splice(source.index, 1);
          destItems.splice(destination.index, 0, removed);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...sourceColumn,
              items: sourceItems,
            },
            [destination.droppableId]: {
              ...destColumn,
              items: destItems.map((item) => {
                return {
                  id: item.id,
                  products: item.products,
                  table: item.table,
                  status: destination.droppableId,
                };
              }),
            },
          });
        } else {
          const column =
            columns[source.droppableId as 'WAITING' | 'IN_PRODUCTION' | 'DONE'];
          const copiedItems = [...(column.items ?? [])];
          const [removed] = copiedItems.splice(source.index, 1);
          copiedItems.splice(destination.index, 0, removed);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...column,
              items: copiedItems,
            },
          });
        }
      }}
    >
      <Container>
        {columns &&
          Object.entries(columns).map(([columnId, column], index) => {
            return (
              enabled && (
                <Droppable key={columnId} droppableId={columnId}>
                  {(provided, snapshot) => (
                    <OrderList
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      title={column.title}
                      orderListData={column.items}
                      providedPlaceholder={provided.placeholder}
                      noContentMessage={column.noContent}
                    />
                  )}
                </Droppable>
              )
            );
          })}
      </Container>
    </DragDropContext>
  );
}

const Container = styled('div', {
  display: 'flex',
  gap: '2rem',
  flex: 1,
  overflow: 'hidden',
});
