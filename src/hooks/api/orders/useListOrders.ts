import { useQueryGet } from '@/hooks/query';
import { Order } from '@/types';

export const useListOrder = () => {
  const { data, ...rest } = useQueryGet<Order[]>({
    queryKeys: ['orders'],
    url: '/orders',
  });

  return { orderList: data, ...rest };
};
