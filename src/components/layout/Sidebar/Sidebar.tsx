'use client';
import { ComponentProps } from '@stitches/react';
import { Container } from './sidebar.styles';

interface SidebarProps extends ComponentProps<typeof Container> {}

export const Sidebar = ({ ...props }: SidebarProps) => {
  return <Container {...props}></Container>;
};
