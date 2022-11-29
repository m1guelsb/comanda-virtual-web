import { Container, Props } from './header.styles';

export interface HeaderProps extends Props {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <Container {...props}>
      <h1>Comanda Virtual</h1>
    </Container>
  );
};
