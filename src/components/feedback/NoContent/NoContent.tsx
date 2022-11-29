import { CSS, styled } from '@/styles/stitches.config';

interface NoContentProps {
  message: string;
}
export const NoContent = ({ message }: NoContentProps) => {
  return (
    <Container>
      <h3>{message}</h3>
    </Container>
  );
};

const Container = styled('div', {
  flex: 1,
  _alignCenter: true,
  textAlign: 'center',
});
