import Link from 'next/link';
import { ReactElement } from 'react';

interface NavButton {
  href: string;
  iconSrc: string;
}
export const NavButton = ({ href, iconSrc }: NavButton) => {
  return <div>nav button</div>;
};
