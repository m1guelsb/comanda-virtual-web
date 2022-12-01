'use client';

import { useEffect, useState } from 'react';
import { Order, tOrdersColumns } from '@/types';

interface useOrdersColumnsProps {
  orderList: Order[] | undefined;
}
export const useOrdersColumns = ({ orderList }: useOrdersColumnsProps) => {
  const [ordersColumns, setOrdersColumns] = useState<tOrdersColumns>();

  useEffect(() => {
    setOrdersColumns({
      ['WAITING']: {
        title: 'Em espera',
        items: orderList?.filter((order) => order.status === 'WAITING'),
        noContent: 'Não há pedidos em espera',
      },
      ['IN_PRODUCTION']: {
        title: 'Em produção',
        items: orderList?.filter((order) => order.status === 'IN_PRODUCTION'),
        noContent: 'Não há pedidos em produção',
      },
      ['DONE']: {
        title: 'Finalizado',
        items: orderList?.filter((order) => order.status === 'DONE'),
        noContent: 'Não há pedidos finalizados',
      },
    });
  }, [orderList]);

  return { ordersColumns };
};
