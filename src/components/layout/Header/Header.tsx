import { CSS, styled, theme } from '@/styles/stitches.config';

interface HeaderProps {
  css?: CSS;
}
export const Header = ({ ...props }: HeaderProps) => {
  return (
    <HeaderContainer {...props}>
      <h1>Comanda Virtual</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled('header', {
  height: '5.5rem',

  display: 'flex',
  alignItems: 'center',

  _paddingX: '2rem',

  backgroundColor: theme.colors.background1,

  _border: 'Bottom',
  borderColor: theme.colors.background3,
});
