import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactNode } from 'react';
interface props {
  children: ReactNode;
  variant: string;
}
export default function Layout({ children, variant }: props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}