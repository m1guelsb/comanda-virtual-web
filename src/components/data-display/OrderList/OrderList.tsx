import { NoContent } from '@/components/feedback';
import { styled, theme } from '@/styles/stitches.config';
import { Order } from '@/types';
import { OrderCard } from '../OrderCard/OrderCard';

interface OrderListProps {
  title: string;
  orderListData: Order[];
  noContentMessage: string;
}
export const OrderList = ({
  title,
  orderListData,
  noContentMessage,
}: OrderListProps) => {
  return (
    <Container>
      <>
        <h2>{title}</h2>

        {orderListData.length > 0 ? (
          orderListData.map((order) => (
            <OrderCard
              key={order.id}
              table={order.table}
              productsTotal={order.products.length}
            />
          ))
        ) : (
          <NoContent message={noContentMessage} />
        )}
      </>
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: '1rem',

  borderRadius: theme.radii.md,
  padding: '1.5rem',

  overflow: 'auto',

  backgroundColor: theme.colors.background2,
});
