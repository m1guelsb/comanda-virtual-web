import { ComponentProps, styled, theme } from '@/styles/stitches.config';

export type Props = ComponentProps<typeof Container>;

export const Container = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: '1rem',

  borderRadius: theme.radii.md,
  padding: '1.25rem',
  paddingRight: '0.5rem',
  paddingBottom: '0',

  backgroundColor: theme.colors.background2,
  transition: '0.3s',
});

export const OrdersContainer = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  borderRadius: theme.radii.sm,

  paddingRight: '0.25rem',

  overflow: 'auto',
  scrollbarGutter: 'stable',

  [`> div`]: {
    marginBottom: '1rem',
  },
});
