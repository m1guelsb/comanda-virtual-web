'use client';

import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { OrderList } from '@/components/data-display';
import { tOrdersColumns, tOrderState } from '@/types';
import { Container, Props } from './dnd-orders-columns.styles';

import {
  useIsFetching,
  useIsMutating,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { useEditOrder } from '@/hooks/api/orders';

interface DnDOrdersColumnsProps extends Props {
  ordersColumns: tOrdersColumns | undefined;
}
export const DnDOrdersColumns = ({ ordersColumns }: DnDOrdersColumnsProps) => {
  const [columns, setColumns] = useState<tOrdersColumns | undefined>();

  const queryClient = useQueryClient();
  const { editOrder, isLoading } = useEditOrder();

  const isUpdating = !!useIsMutating(['edit-order']);
  const isFetching = !!useIsFetching(['orders']);

  useEffect(() => {
    if (!isUpdating && !isFetching && !isLoading) {
      setColumns(ordersColumns);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ordersColumns]);

  const handleOnDragEnd = (result: DropResult) => {
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

      const updatedOrder = destItems.filter(
        (item) => item.status !== destination.droppableId
      )?.[0];

      if (updatedOrder) {
        editOrder({
          patchId: updatedOrder.id,
          payload: { status: destination.droppableId as tOrderState },
        });
      }
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
  };

  return (
    <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
      <Container>
        {columns &&
          Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided, snapshot) => (
                  <OrderList
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    title={column.title}
                    orderListData={column.items}
                    providedPlaceholder={provided.placeholder}
                    noContentMessage={
                      snapshot.isDraggingOver ? '' : column.noContent
                    }
                    css={{
                      backgroundColor:
                        columnId === 'WAITING'
                          ? '$waiting'
                          : columnId === 'IN_PRODUCTION'
                          ? '$in_prod'
                          : columnId === 'DONE'
                          ? '$done'
                          : '$background1',
                    }}
                  />
                )}
              </Droppable>
            );
          })}
      </Container>
    </DragDropContext>
  );
};
