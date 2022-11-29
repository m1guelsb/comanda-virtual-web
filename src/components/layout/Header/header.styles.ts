import { ComponentProps, styled, theme } from '@/styles/stitches.config';

export type Props = ComponentProps<typeof Container>;

export const Container = styled('header', {
  height: '5.5rem',

  display: 'flex',
  alignItems: 'center',

  _paddingX: '2rem',

  backgroundColor: theme.colors.background1,

  _border: 'Bottom',
  borderColor: theme.colors.primary,
});
