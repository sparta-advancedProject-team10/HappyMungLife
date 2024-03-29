import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Nav from '@/app/_components/layout/Nav';
import Footer from '@/app/_components/layout/Footer';
import Header from '@/app/_components/layout/Header';
import QueryProvider from './provider';

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: '해피멍생',
  description: '반려견 커뮤니티 사이트'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" data-theme="light" className={GeistSans.className}>
      <body>
        <Header />
        <Nav />
        <main>
          <QueryProvider>{children}</QueryProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
