import { useEffect, useState } from 'react';
import { tOrdersColumns, tOrderState } from '@/types';
import { useEditOrder } from '../api/orders';
import { DropResult } from 'react-beautiful-dnd';

interface useOrdersDnDProps {
  ordersColumns: tOrdersColumns | undefined;
}
export const useOrdersDnD = ({ ordersColumns }: useOrdersDnDProps) => {
  const { editOrder } = useEditOrder();
  const [columns, setColumns] = useState<tOrdersColumns | undefined>();

  useEffect(() => {
    setColumns(ordersColumns);
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

  return {
    columns,
    handleOnDragEnd,
  };
};
