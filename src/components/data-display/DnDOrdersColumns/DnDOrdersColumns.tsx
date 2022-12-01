'use client';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { OrderList } from '@/components/data-display';
import { tOrdersColumns } from '@/types';
import { Container, Props } from './dnd-orders-columns.styles';
import { useOrdersDnD } from '@/hooks/orders';

interface DnDOrdersColumnsProps extends Props {
  ordersColumns: tOrdersColumns | undefined;
}
export const OrdersDnDColumns = ({ ordersColumns }: DnDOrdersColumnsProps) => {
  const { columns, handleOnDragEnd } = useOrdersDnD({ ordersColumns });

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
