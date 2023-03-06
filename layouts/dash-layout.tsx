import { ReactNode } from 'react';
import Header from '../components/Header';
interface props {
  children: ReactNode;
  variant: string;
}
export default function Layout({ children, variant }: props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
