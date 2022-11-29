import { styled } from '@/styles/stitches.config';

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <h1>PEDIDOS</h1>

      <>{children}</>
    </Container>
  );
}

const Container = styled('div', {
  _flexGrow: 1,
  gap: '1rem',
  flexDirection: 'column',
});
