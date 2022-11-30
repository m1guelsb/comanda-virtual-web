import { Order } from '@/types';
import { Orders } from './orders';

const getOrders = async (): Promise<Order[]> => {
  return fetch('https://comanda-virtual-api.onrender.com/orders', {
    cache: 'no-store',
  }).then((res) => res.json());
};

export default async function OrdersPage() {
  const orderList = await getOrders();

  return <Orders orderList={orderList} />;
}
