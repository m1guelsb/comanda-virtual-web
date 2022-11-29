import { OrderCard, OrderList } from '@/components/data-display';
import { NoContent } from '@/components/feedback';
import { styled, theme } from '@/styles/stitches.config';
import { Order } from '@/types';

async function getOrders(): Promise<Order[]> {
  try {
    const data = await fetch(`${process.env.API_URL}/orders`, {
      cache: 'no-store',
    }).then((res) => res.json());

    return data;
  } catch (error) {
    throw new Error('Failed to fetch');
  }
}

export default async function Orders() {
  const orderList = await getOrders();

  const waitingOrders = orderList.filter((order) => order.status === 'WAITING');

  const inProdOrders = orderList.filter(
    (order) => order.status === 'IN_PRODUCTION'
  );

  const doneOrders = orderList.filter((order) => order.status === 'DONE');

  return (
    <Container>
      <OrderList
        title="Em espera"
        orderListData={waitingOrders}
        noContentMessage={'Sem pedidos na fila de espera'}
      />
      <OrderList
        title="Em produção"
        orderListData={inProdOrders}
        noContentMessage={'Sem pedidos na fila de produção'}
      />
      <OrderList
        title="Concluídos"
        orderListData={doneOrders}
        noContentMessage={'Sem pedidos concluídos'}
      />
    </Container>
  );
}

const Container = styled('div', {
  display: 'flex',
  gap: '2rem',
  flex: 1,
  overflow: 'hidden',
});
