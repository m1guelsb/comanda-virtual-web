import { ComponentProps, styled, theme } from '@/styles/stitches.config';

export type Props = ComponentProps<typeof Container>;

export const Container = styled('div', {
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
