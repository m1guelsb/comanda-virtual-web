import { styled, theme } from '@/styles/stitches.config';

export const AppContainer = styled('div', {
  flexGrow: 1,
  display: 'grid',
  overflow: 'hidden',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'auto 1fr',
});

export const MainContent = styled('main', {
  display: 'flex',
  padding: '2rem',
  backgroundColor: theme.colors.background1,
  overflow: 'hidden',
});
