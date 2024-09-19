// File: src/app/layout.js
import './globals.css'
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bebasNeue.className}>
      <body>{children}</body>
    </html>
  );
}