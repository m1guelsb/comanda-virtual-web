'use client';
import { DnDOrdersColumns } from '@/components/data-display';
import { useOrdersColumns } from '@/hooks/helpers';
import { Order } from '@/types';

export const Orders = ({ orderList }: { orderList: Order[] }) => {
  const { ordersColumns } = useOrdersColumns({ orderList });

  return <DnDOrdersColumns ordersColumns={ordersColumns} />;
};
