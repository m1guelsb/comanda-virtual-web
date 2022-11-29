'use client';

import { DnDOrdersColumns } from '@/components/data-display';
import { useListOrder } from '@/hooks/api/orders';
import { useOrdersColumns } from '@/hooks/helpers';

export default function Orders() {
  const { orderList, isLoading } = useListOrder();

  const { ordersColumns } = useOrdersColumns({ orderList });

  return (
    <DnDOrdersColumns ordersColumns={ordersColumns} isLoading={isLoading} />
  );
}
