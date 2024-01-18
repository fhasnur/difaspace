import NavLinks from '../ui/nav-links';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | difaspace',
    default: 'difaspace',
  },
  description: 'The space for people with disabillities.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavLinks />
      <main>{children}</main>
    </>
  );
}