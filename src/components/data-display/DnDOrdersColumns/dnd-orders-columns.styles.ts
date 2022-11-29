import { ComponentProps, styled } from '@/styles/stitches.config';

export type Props = ComponentProps<typeof Container>;

export const Container = styled('div', {
  display: 'flex',
  gap: '2rem',
  flex: 1,
  overflow: 'hidden',
});
