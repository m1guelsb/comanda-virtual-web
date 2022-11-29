import { styled, theme } from '@/styles/stitches.config';

interface OrderCardProps {
  table: string;
  productsTotal: number;
}
export const OrderCard = ({ table, productsTotal }: OrderCardProps) => {
  return (
    <Container>
      <p>Mesa: {table}</p>
      <p>Itens: {productsTotal}</p>
    </Container>
  );
};

const Container = styled('div', {
  minHeight: '10rem',
  maxHeight: '10rem',

  borderRadius: theme.radii.sm,

  _flexGrow: 1,
  _alignCenter: true,
  _flexColumn: true,

  backgroundColor: theme.colors.background3,
  _border: 'All',
  borderColor: theme.colors.primary,
});
