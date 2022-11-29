import { CSS, styled, theme } from '@/styles/stitches.config';

interface SidebarProps {
  css?: CSS;
}
export const Sidebar = ({ ...props }: SidebarProps) => {
  return <S_Sidebar {...props}></S_Sidebar>;
};

const S_Sidebar = styled('aside', {
  height: '100%',
  width: '5.5rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  _paddingY: '1.25rem',

  _border: 'Right',

  borderColor: theme.colors.background3,
});
