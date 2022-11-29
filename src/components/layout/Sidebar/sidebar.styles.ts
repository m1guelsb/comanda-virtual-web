import { ComponentProps, styled, theme } from '@/styles/stitches.config';

export type Props = ComponentProps<typeof Container>;

export const Container = styled('aside', {
  height: '100%',
  width: '5.5rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  _paddingY: '1.25rem',

  _border: 'Right',

  borderColor: theme.colors.primary,
});
