import { useQueryPatch } from '@/hooks/query';
import { Order } from '@/types';
import { useState } from 'react';

interface OrderPayload extends Partial<Order> {}

export const useEditOrder = () => {
  const { patch, ...rest } = useQueryPatch<OrderPayload>({
    url: `/orders/`,
    mutationKey: ['edit-order'],
  });

  return { editOrder: patch, ...rest };
};
