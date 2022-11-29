'use client';

import { DnDOrdersColumns } from '@/components/data-display';
import { useListOrder } from '@/hooks/api/orders';
import { useOrdersColumns } from '@/hooks/helpers';

export default function Orders() {
  const { orderList } = useListOrder();

  const { ordersColumns } = useOrdersColumns({ orderList });

  return <DnDOrdersColumns ordersColumns={ordersColumns} />;
}
