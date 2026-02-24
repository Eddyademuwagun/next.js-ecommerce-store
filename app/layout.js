import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from './Header';
import styles from './page.module.css';

export const metadata = {
  title: 'wings',
  description: 'Your flight broker',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
