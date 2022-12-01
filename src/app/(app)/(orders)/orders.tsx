'use client';
import { OrdersDnDColumns } from '@/components/data-display';
import { useOrdersColumns } from '@/hooks/orders';
import { Order } from '@/types';

export const Orders = ({ orderList }: { orderList: Order[] }) => {
  const { ordersColumns } = useOrdersColumns({ orderList });

  return <OrdersDnDColumns ordersColumns={ordersColumns} />;
};
